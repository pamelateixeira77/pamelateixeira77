"use client"

import { useState } from "react"
import Header from "@/components/header"
import ProductTabs from "@/components/product-tabs"
import ProductList from "@/components/product-list"
import Timer from "@/components/timer"
import Reviews from "@/components/reviews"
import LocationPopup from "@/components/location-popup"
import SocialProofNotifications from "@/components/social-proof-notifications"

export default function Home() {
  const [activeTab, setActiveTab] = useState("promocao")

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductList activeTab={activeTab} />
      <Timer />
      <Reviews />
      <LocationPopup />
      <SocialProofNotifications />
    </main>
  )
}
