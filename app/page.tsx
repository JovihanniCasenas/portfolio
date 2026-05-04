"use client"

import Profile from "@/components/Profile"
import Main from "@/components/Main"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <div className="h-dvh overflow-hidden">
      <main className="h-full">
        {isMobile ? (
          <div className="w-full h-full p-6 overflow-y-auto">
            <Profile />
            <div className="flex items-center py-24">
              <Main />
            </div>
          </div>
        ) : (
          <div className="flex flex-row h-full">
            <div className="p-24 w-1/2 sticky top-0 h-full overflow-hidden">
              <Profile />
            </div>
            <div className="w-1/2 h-full overflow-y-auto">
              <div className="flex items-center pr-24 py-24">
                <Main />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
