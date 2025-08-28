import { useAuth } from "@/hooks/useAuth";
import Layout from "@/components/HymnRO/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const UserPanel = () => {
  const { user, userProfile, loading, signOut } = useAuth();
  const [showSensitiveData, setShowSensitiveData] = useState(false);

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

  if (userProfile?.role === 'admin') {
    return <Navigate to="/admin-panel" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">User Dashboard</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Welcome</span>
            <br />
            <span className="text-foreground">{userProfile?.username}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your personal dashboard for managing your HymnRO account and game data.
          </p>
        </div>
      </section>

      {/* User Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="permissions" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Permissions
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>
                    View and manage your account information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Username</h4>
                      <p className="text-muted-foreground">{userProfile?.username}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Role</h4>
                      <Badge variant="secondary">{userProfile?.role}</Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Account Created</h4>
                      <p className="text-muted-foreground">
                        {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Last Updated</h4>
                      <p className="text-muted-foreground">
                        {userProfile?.updated_at ? new Date(userProfile.updated_at).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button onClick={signOut} variant="outline">
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="permissions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Permissions</CardTitle>
                  <CardDescription>
                    What you can and cannot access in the system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-3">✅ You CAN:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• View your own profile information</li>
                        <li>• Update your own profile data</li>
                        <li>• Access the user panel</li>
                        <li>• Sign out of your account</li>
                        <li>• Change your password (if implemented)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-red-600 mb-3">❌ You CANNOT:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• View other users' profiles</li>
                        <li>• Access the admin panel</li>
                        <li>• Modify user roles</li>
                        <li>• View system database information</li>
                        <li>• Manage other users' accounts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Privacy</CardTitle>
                  <CardDescription>
                    Understanding what data is stored and who can access it
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Show Technical Data</h4>
                      <p className="text-sm text-muted-foreground">
                        View technical details about your account
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSensitiveData(!showSensitiveData)}
                    >
                      {showSensitiveData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>

                  {showSensitiveData && (
                    <div className="p-4 border rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-3">Technical Account Data</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div>User ID: {user?.id}</div>
                        <div>Email: {user?.email}</div>
                        <div>Profile ID: {userProfile?.id}</div>
                        <div>Role: {userProfile?.role}</div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        ⚠️ This technical data is only visible to you. Admins can see similar data for all users.
                      </p>
                    </div>
                  )}

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Privacy Protection</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Your data is protected by Row Level Security (RLS)</li>
                      <li>• You can only access your own account information</li>
                      <li>• Admins have elevated permissions for system management</li>
                      <li>• All database access is logged and monitored</li>
                    </ul>
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

export default UserPanel;