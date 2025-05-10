--- a/src/components/contact-cta.tsx
+++ b/src/components/contact-cta.tsx
@@
-"use client"
-
-import type React from "react"
-
-import { useState, type FormEvent } from "react"
-import Link from "next/link"
+import React, { useState, FormEvent } from "react"
+// removed next/link — using standard <a> tags
 import { MessageCircle, Mail, Send } from "lucide-react"

 export default function ContactCTA() {
@@
             <div className="flex flex-col sm:flex-row gap-6">
-              <Link
-                href="https://t.me/Reactivatehub"
+              <a
+                href="https://t.me/Reactivatehub"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
               >
                 <MessageCircle size={20} />
                 Contact on Telegram
-              </Link>
+              </a>
               <Link
                 href="mailto:Reactivatehubb@gmail.com"
                 className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
               >
                 <Mail size={20} />
                 Email Us
               </Link>
             </div>
