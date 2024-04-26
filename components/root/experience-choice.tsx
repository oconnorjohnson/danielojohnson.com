import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExperienceChoice() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div>
            <Link href="/code-editor">
              <Button variant="outline">Code Editor</Button>
            </Link>
          </div>
          <div>
            <Link href="/code-editor">
              <Button variant="outline">Code Editor</Button>
            </Link>
          </div>
          <div>
            <Link href="/code-editor">
              <Button variant="outline">Code Editor</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
