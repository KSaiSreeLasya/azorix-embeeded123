import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton({ className }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleBack}
      className={className}
      aria-label="Go back"
      title={`Back from ${location.pathname}`}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
}
