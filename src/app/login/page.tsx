import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { signIn } from "@/auth"
import { auth } from "@/auth"

export default async function Page() {

  const session = await auth()

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <div className="grid p-4">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Login using your Google Account.
            </CardDescription>
          </CardHeader>

          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <Button className="w-full">
              Login with Google
            </Button>
          </form>
          <Textarea className="mt-4 min-h-20" placeholder={JSON.stringify(session, null, 2)} />
        </div>
      </Card>
    </div>
  )
}
