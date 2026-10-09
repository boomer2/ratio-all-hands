import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/deck/presentation";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Presentation />;
}
