"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Home,
  Package,
  MessageCircle,
  User,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Certificates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Company Show
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Video
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    360° Virtual Tour
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Related Products List
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Women's Clothing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Men's Fashion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts : Mr.A</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">
                  Mobile Phone : +861816898079779
                </li>
                <li className="text-gray-300">Tel : +86-168-79779</li>
                <li className="text-gray-300">Email : 1816@email.com</li>
                <li className="text-gray-300">
                  Address : RoomA303, No.3, Lufeng East Road, Shanghai, China
                </li>
              </ul>
            </div>

            {/* Contact Info 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts : Ms.B</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">
                  Mobile Phone : +861816898079779
                </li>
                <li className="text-gray-300">Tel : +86-168-79779</li>
                <li className="text-gray-300">Email : 1816@email.com</li>
                <li className="text-gray-300">
                  Address : RoomA303, No.3, Lufeng East Road, Shanghai, China
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Youtube size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              History
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Tags
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Inquiry
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              Copyright © 2025 TH Clothes (Hubei Hongyihao Garment Co., Ltd.)
              All rights reserved.{" "}
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </p>
            <p className="mb-2">
              Fashion manufacturer / supplier, offering Women's Clothing, Men's
              Fashion, Accessories, etc.
            </p>
            <p className="text-xs">浙B2-20200628</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
        <div className="grid grid-cols-5">
          <a
            href="#"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-600"
          >
            <Home size={20} className="mb-1" />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-600"
          >
            <Package size={20} className="mb-1" />
            <span>Product</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-600"
          >
            <MessageCircle size={20} className="mb-1" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-600"
          >
            <User size={20} className="mb-1" />
            <span>About Us</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-600"
          >
            <Mail size={20} className="mb-1" />
            <span>Inquiry</span>
          </a>
        </div>
      </div>

      {/* Mobile spacer */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
