import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AuthLayout } from '../auth-layout'
import { OtpForm } from './components/otp-form'

export function Otp() {
  return (
    <AuthLayout>
      <Card className='max-w-md gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>
            Verify Your Email
          </CardTitle>

          <CardDescription>
            Enter the 6-digit verification code that was sent to your email
            address.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <OtpForm />
        </CardContent>
      </Card>
    </AuthLayout>
  )
}