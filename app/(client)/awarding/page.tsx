"use client"

import BannerTitle from "@/components/banner-title"
import { useState } from "react";

export default function InvitedSpeakers() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState(1);

  // Category data
  const categories = {
    1: {
      title: "KATEGORI 1",
      description: "Penghargaan bagi Anggota PDKI Penghargaan untuk anggota yang menunjukkan dedikasi luar biasa dalam pelayanan kedokteran keluarga, inovasi praktik klinis, dan kontribusi aktif dalam pengembangan komunitas kesehatan.",
      subcategories: [
        {
          name: "Sub Kategori 1",
          title: "Excellence in Health Education and Advocacy Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScYK1zm1EOhQa-CG6yNyUuHHVCmR5Frhf3sOAWYOYL4NMXg4g/viewform"
        },
        {
          name: "Sub Kategori 2",
          title: "Innovative Practice in Family Medicine Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSf3drhWeuq6DpWMtaG3brE583G0CjFACDN0JhN8Ilhkqo0j_Q/viewform"
        },
        {
          name: "Sub Kategori 3",
          title: "Lifetime Achievement in Family Medicine Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSeLdScVF5sVogNAj0dkbgn8OEnkUmoXHPV8pjlfJxFjJWvKlw/viewform"
        },
        {
          name: "Sub Kategori 4",
          title: "Community Care Champion Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfbZ6yFzY87YdiRyydPwCUajJ-g5ZRe0T6Ng7NYwkD2lBuMsg/viewform"
        }
      ]
    },
    2: {
      title: "KATEGORI 2",
      description: "Penghargaan bagi Pengurus PDKI Penghargaan untuk pengurus yang memberikan kepemimpinan inspiratif, implementasi program strategis, dan upaya tak kenal lelah dalam memperkuat peran PDKI di tingkat nasional maupun internasional.",
      subcategories: [
        {
          name: "Subkategori 2.1",
          title: "Visionary Leadership Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScCbsn7nn0-Hww7tot72qrLj5MNFSnj2IsnN8x1roTUnMmYzQ/viewform"
        },
        {
          name: "Sub Kategori 2.2",
          title: "Program Excellence Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSesc-AYKfyaL6Hq9Xpf6bQK9c_ve0ftKSXdJUI7opdVVrL7Ow/viewform"
        },
        {
          name: "Sub Kategori 2.3",
          title: "Collaboration Champion Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfNeseSYtBEo0RrqgdnS_i8TWhF6Bh_RYz3l8R-ZVbspp6DBQ/viewform"
        }
      ]
    },
    3: {
      title: "KATEGORI 3",
      description: "Penghargaan bagi PDKI Cabang: Penghargaan untuk cabang yang berhasil menjalankan program unggulan, memperkuat kolaborasi dengan pemangku kepentingan, serta menciptakan dampak positif yang signifikan bagi masyarakat dan anggota di wilayahnya.",
      subcategories: [
        {
          name: "Sub Kategori 3.1",
          title: "Best Community Engagement Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfqvhb7HMrz9ZarIN60NAv1fuxzlmRPC0qFzPZrAkYoVLZ9tQ/viewform"
        },
        {
          name: "Sub Kategori 3.2",
          title: "Innovative Branch Initiative Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScd5tP753vm8k4PKF4C-CR4D1DtyrsmgwVcL7ibvtGx3F5VkQ/viewform"
        },
        {
          name: "Sub Kategori 3.3",
          title: "Outstanding Growth and Development Award",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfY9Tit_gQZhox59b00iHV4eS7rp9LKMKD4Wfi8zpKrdX5kbQ/viewform"
        }
      ]
    }
  };

  return (
    <div className="h-full">
      <BannerTitle message="Awarding" /> 
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[1, 2, 3].map((categoryNum) => (
            <button
              key={categoryNum}
              onClick={() => setActiveCategory(categoryNum)}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all ${
                activeCategory === categoryNum
                  ? "bg-primary-color text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Kategori {categoryNum}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {categories[activeCategory].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {categories[activeCategory].description}
          </p>
        </div>

        {/* Subcategories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeCategory].subcategories.map((subcat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {subcat.name}
                </h3>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {subcat.title}
                </h4>
                <a
                  href={subcat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
