import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SetupTestUsers = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const setupUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('setup-test-users');
      
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Test users have been created successfully!",
        });
        console.log('Setup results:', data);
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to setup test users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Setup Test Users</CardTitle>
        <CardDescription>
          Create test accounts for demo purposes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={setupUsers} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Creating Users...' : 'Create Test Users'}
        </Button>
        <div className="mt-4 text-sm text-muted-foreground">
          <p className="font-semibold mb-2">Will create:</p>
          <ul className="space-y-1">
            <li>• admin@hymnro.com (admin123) - Admin</li>
            <li>• user1@hymnro.com (user123) - User</li>
            <li>• user2@hymnro.com (user123) - User</li>
            <li>• user3@hymnro.com (user123) - User</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SetupTestUsers;