import { Metadata } from "next"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

export const metadata: Metadata = {
  title: "404 - page not found"

}

export default function NotFound() {
  return (
    <main className=" bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] w-full h-screen flex justify-center items-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className=" text-gray-400">404 - Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist. Try searching for
            what you need below.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </main>
  )
}
