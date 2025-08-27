"use client";

import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Menu,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SideNavItem {
  name: string;
  href: string;
  hasChildren?: boolean;
  children?: SideNavItem[];
  dataIndex?: string;
}

const sideNavData: SideNavItem[] = [
  { name: "Home", href: "#" },
  { name: "New", href: "#" },
  { name: "Top", href: "#" },
  { name: "Dress", href: "#" },
  { name: "Bottoms", href: "#" },
  {
    name: "All Clothing Products",
    href: "#",
    hasChildren: true,
    dataIndex: "1",
    children: [
      {
        name: "Products1",
        href: "#",
        hasChildren: true,
        dataIndex: "11",
        children: [
          { name: "Products1——1", href: "#" },
          { name: "Ladies Dresses", href: "#" },
        ],
      },
      {
        name: "Products2",
        href: "#",
        hasChildren: true,
        dataIndex: "22",
        children: [
          { name: "Products1——2", href: "#" },
          { name: "Ladies Dresses", href: "#" },
        ],
      },
      {
        name: "Products3",
        href: "#",
        hasChildren: true,
        dataIndex: "33",
        children: [
          { name: "Products1——3", href: "#" },
          { name: "Ladies Dresses", href: "#" },
        ],
      },
      { name: "Ladies Dresses", href: "#" },
    ],
  },
  {
    name: "Shoes",
    href: "#",
    hasChildren: true,
    dataIndex: "2",
    children: [
      {
        name: "Shoes",
        href: "#",
        hasChildren: true,
        dataIndex: "44",
        children: [
          { name: "Products1——4", href: "#" },
          { name: "Ladies Dresses", href: "#" },
        ],
      },
      { name: "Ladies Dresses", href: "#" },
    ],
  },
  {
    name: "More",
    href: "#",
    hasChildren: true,
    dataIndex: "3",
    children: [
      { name: "More", href: "#" },
      { name: "Ladies Dresses", href: "#" },
    ],
  },
];

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null,
  );

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const resetSideNav = () => {
    setCurrentLevel(1);
    setActiveItems({});
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  const handleItemClick = (item: SideNavItem, level: number) => {
    if (item.hasChildren) {
      const key = `${level}-${item.dataIndex || item.name}`;
      const isActive = activeItems[key];

      if (level === 1) {
        if (isActive) {
          setActiveItems({});
          setCurrentLevel(1);
          setSelectedCategory(null);
        } else {
          setActiveItems({ [key]: true });
          setCurrentLevel(2);
          setSelectedCategory(item.dataIndex || null);
        }
      } else if (level === 2) {
        if (isActive) {
          setActiveItems({ ...activeItems, [key]: false });
          setCurrentLevel(2);
          setSelectedSubCategory(null);
        } else {
          setActiveItems({ ...activeItems, [key]: true });
          setCurrentLevel(3);
          setSelectedSubCategory(item.dataIndex || null);
        }
      }
    }
  };

  const goBack = (level: number) => {
    if (level === 2) {
      setCurrentLevel(2);
      setSelectedSubCategory(null);
    } else if (level === 1) {
      setCurrentLevel(1);
      setActiveItems({});
      setSelectedCategory(null);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <Sheet onOpenChange={(open) => !open && resetSideNav()}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Menu size={20} />
                  <span className="text-sm">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-4xl p-0">
                <div className="flex h-full">
                  {/* Level 1 */}
                  <div className="flex-1 border-r border-gray-200">
                    <SheetHeader className="p-4 border-b">
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {sideNavData.map((item, index) => (
                          <li key={index}>
                            <Button
                              variant={
                                activeItems[`1-${item.dataIndex || item.name}`]
                                  ? "secondary"
                                  : "ghost"
                              }
                              onClick={() => handleItemClick(item, 1)}
                              className="w-full justify-between"
                            >
                              <span>{item.name}</span>
                              {item.hasChildren && <ChevronRight size={16} />}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Level 2 */}
                  {currentLevel >= 2 && selectedCategory && (
                    <div className="flex-1 border-r border-gray-200">
                      <div className="flex items-center p-4 border-b">
                        <Button
                          variant="ghost"
                          onClick={() => goBack(1)}
                          className="flex items-center space-x-2"
                        >
                          <ChevronLeft size={20} />
                          <span className="text-sm">Back</span>
                        </Button>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {sideNavData
                            .find((item) => item.dataIndex === selectedCategory)
                            ?.children?.map((item, index) => (
                              <li key={index}>
                                <Button
                                  variant={
                                    activeItems[
                                      `2-${item.dataIndex || item.name}`
                                    ]
                                      ? "secondary"
                                      : "ghost"
                                  }
                                  onClick={() => handleItemClick(item, 2)}
                                  className="w-full justify-between"
                                >
                                  <span>{item.name}</span>
                                  {item.hasChildren && (
                                    <ChevronRight size={16} />
                                  )}
                                </Button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Level 3 */}
                  {currentLevel >= 3 && selectedSubCategory && (
                    <div className="flex-1">
                      <div className="flex items-center p-4 border-b">
                        <Button
                          variant="ghost"
                          onClick={() => goBack(2)}
                          className="flex items-center space-x-2"
                        >
                          <ChevronLeft size={20} />
                          <span className="text-sm">Back</span>
                        </Button>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {sideNavData
                            .find((item) => item.dataIndex === selectedCategory)
                            ?.children?.find(
                              (item) => item.dataIndex === selectedSubCategory,
                            )
                            ?.children?.map((item, index) => (
                              <li key={index}>
                                <Button
                                  variant="ghost"
                                  asChild
                                  className="w-full justify-start"
                                >
                                  <a href={item.href}>{item.name}</a>
                                </Button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSearch}
              className="flex items-center space-x-2"
            >
              <Search size={20} />
              <span className="text-sm">Search</span>
            </Button>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="block">
              <Image
                src="/images/logo.png"
                alt="TH Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Right Section */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Globe size={20} />
              <span className="text-sm">Language</span>
            </Button>
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                English
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                中文
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                More &gt;&gt;
              </a>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 p-4">
            <form className="flex gap-2">
              <Input type="text" placeholder="Search" className="flex-1" />
              <Button type="submit" size="icon">
                <Search size={16} />
              </Button>
            </form>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}
