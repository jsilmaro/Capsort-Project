import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsDialog({ open, onOpenChange }: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms of Service and Privacy Policy</DialogTitle>
          <DialogDescription>
            Please read our Terms of Service and Privacy Policy carefully.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Terms of Service */}
            <div>
              <h3 className="font-['Poppins'] mb-4">Terms of Service</h3>
              <div className="space-y-4 text-[14px] text-gray-700">
                <p>
                  <strong>1. Acceptance of Terms</strong>
                  <br />
                  By accessing and using the CapSort (Capstone Archiving and Sorting System), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  <strong>2. Use License</strong>
                  <br />
                  Permission is granted to temporarily access the materials on CapSort for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <p>
                  <strong>3. User Accounts</strong>
                  <br />
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p>
                  <strong>4. User Responsibilities</strong>
                  <br />
                  You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
                <p>
                  <strong>5. Content Guidelines</strong>
                  <br />
                  Users must only upload capstone papers and related academic materials. Any inappropriate, offensive, or copyrighted content without permission is strictly prohibited.
                </p>
                <p>
                  <strong>6. Intellectual Property</strong>
                  <br />
                  All capstone papers uploaded remain the intellectual property of their respective authors. By uploading content, users grant CapSort a license to store, display, and share the content within the platform.
                </p>
                <p>
                  <strong>7. Termination</strong>
                  <br />
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="pt-6 border-t">
              <h3 className="font-['Poppins'] mb-4">Privacy Policy</h3>
              <div className="space-y-4 text-[14px] text-gray-700">
                <p>
                  <strong>1. Information We Collect</strong>
                  <br />
                  We collect information you provide directly to us, including your name, email address, contact number, and academic materials you upload to the platform.
                </p>
                <p>
                  <strong>2. How We Use Your Information</strong>
                  <br />
                  We use the information we collect to:
                  <br />
                  • Provide, maintain, and improve our services
                  <br />
                  • Process and complete transactions
                  <br />
                  • Send you technical notices and support messages
                  <br />
                  • Communicate with you about products, services, and events
                </p>
                <p>
                  <strong>3. Information Sharing</strong>
                  <br />
                  We do not share your personal information with third parties except as described in this policy. Academic materials you upload may be visible to other users of the platform according to your sharing settings.
                </p>
                <p>
                  <strong>4. Data Security</strong>
                  <br />
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                </p>
                <p>
                  <strong>5. Data Retention</strong>
                  <br />
                  We retain your account information for as long as your account is active or as needed to provide you services. You may request deletion of your account at any time.
                </p>
                <p>
                  <strong>6. Your Rights</strong>
                  <br />
                  You have the right to:
                  <br />
                  • Access your personal information
                  <br />
                  • Correct inaccurate information
                  <br />
                  • Request deletion of your information
                  <br />
                  • Object to our use of your information
                </p>
                <p>
                  <strong>7. Contact Us</strong>
                  <br />
                  If you have any questions about this Privacy Policy, please contact us through the platform's support system or at the University of Science and Technology of Southern Philippines.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}