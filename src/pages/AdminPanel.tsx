import { useAuth } from "@/hooks/useAuth";
import Layout from "@/components/HymnRO/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Database, Settings, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const { user, userProfile, loading } = useAuth();
  const { toast } = useToast();
  const [allProfiles, setAllProfiles] = useState<any[]>([]);
  const [showUserData, setShowUserData] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (userProfile?.role === 'admin') {
      fetchAllProfiles();
    }
  }, [userProfile]);

  const fetchAllProfiles = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user profiles",
        variant: "destructive",
      });
    } else {
      setAllProfiles(data || []);
    }
  };

  const toggleUserDataVisibility = (userId: string) => {
    setShowUserData(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const updateUserRole = async (userId: string, newRole: 'admin' | 'user') => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('user_id', userId);
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to update user role",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `User role updated to ${newRole}`,
      });
      fetchAllProfiles();
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (userProfile?.role !== 'admin') {
    return <Navigate to="/user-panel" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Administrator Dashboard</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Admin</span>
            <br />
            <span className="text-foreground">Panel</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Manage users, monitor system activity, and control access permissions for HymnRO.
          </p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="users" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="permissions" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Permissions
              </TabsTrigger>
              <TabsTrigger value="database" className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Database
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    View and manage all registered users in the system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allProfiles.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell className="font-medium">{profile.username}</TableCell>
                          <TableCell>
                            <Badge variant={profile.role === 'admin' ? 'default' : 'secondary'}>
                              {profile.role}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(profile.created_at).toLocaleDateString()}</TableCell>
                          <TableCell className="space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => toggleUserDataVisibility(profile.user_id)}
                            >
                              {showUserData[profile.user_id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button
                              size="sm"
                              variant={profile.role === 'admin' ? 'destructive' : 'default'}
                              onClick={() => updateUserRole(profile.user_id, profile.role === 'admin' ? 'user' : 'admin')}
                            >
                              {profile.role === 'admin' ? 'Demote' : 'Promote'}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* User Data Visibility Section */}
              {Object.entries(showUserData).some(([_, visible]) => visible) && (
                <Card>
                  <CardHeader>
                    <CardTitle>User Data Visibility</CardTitle>
                    <CardDescription>
                      Data that admins can see vs what users can access
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {allProfiles
                      .filter(profile => showUserData[profile.user_id])
                      .map(profile => (
                        <div key={profile.id} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">{profile.username} - Full Profile Data</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-green-600">✓ Admin can see:</span>
                              <ul className="mt-1 space-y-1 text-muted-foreground">
                                <li>• User ID: {profile.user_id}</li>
                                <li>• Username: {profile.username}</li>
                                <li>• Role: {profile.role}</li>
                                <li>• Created: {profile.created_at}</li>
                                <li>• Updated: {profile.updated_at}</li>
                              </ul>
                            </div>
                            <div>
                              <span className="font-medium text-red-600">✗ Regular users see:</span>
                              <ul className="mt-1 space-y-1 text-muted-foreground">
                                <li>• Only their own username</li>
                                <li>• Only their own role</li>
                                <li>• Cannot see other users' data</li>
                                <li>• Cannot modify roles</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="permissions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Permission System</CardTitle>
                  <CardDescription>
                    Role-based access control overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Admin Permissions</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• View all user profiles</li>
                        <li>• Promote/demote users</li>
                        <li>• Access admin panel</li>
                        <li>• Update any user profile</li>
                        <li>• Monitor system activity</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-blue-600 mb-3">User Permissions</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• View own profile only</li>
                        <li>• Update own profile</li>
                        <li>• Access user panel</li>
                        <li>• Cannot see other users' data</li>
                        <li>• Cannot modify roles</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="database" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Database Status</CardTitle>
                  <CardDescription>
                    System database information and statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-hymn-gold">{allProfiles.length}</div>
                      <div className="text-sm text-muted-foreground">Total Users</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-hymn-cyan">
                        {allProfiles.filter(p => p.role === 'admin').length}
                      </div>
                      <div className="text-sm text-muted-foreground">Administrators</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-500">Active</div>
                      <div className="text-sm text-muted-foreground">Database Status</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>
                    Configure system-wide settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Row Level Security</h4>
                      <p className="text-sm text-muted-foreground">
                        ✅ Enabled - Users can only access data they're authorized for
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        ✅ Active - Email/password authentication with role-based access
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPanel;