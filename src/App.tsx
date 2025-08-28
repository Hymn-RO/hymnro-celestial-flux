import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Download from "./pages/Download";
import Register from "./pages/Register";
import Rankings from "./pages/Rankings";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cpanel from "./pages/Cpanel";
import AdminPanel from "./pages/AdminPanel";
import UserPanel from "./pages/UserPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/download" element={<Download />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cpanel" element={<Cpanel />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/user-panel" element={<UserPanel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
