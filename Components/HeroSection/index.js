import React from 'react'

export default function HeroSection() {
    //Hero section'ın olduğu alan.
    // boyuta göre düzenleme yapıldı.
  return (
    <section className="bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:grid-cols-2">
            {/* Sol Taraf Text kısmının olduğu alan.*/}
        <div className="mr-auto place-self-center md:col-2 lg:col-span-7">
            <h1 className="w-full mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">TTMovie sayesinde Filmler hakkında bilgi edinebilir ve yorumlarını görebilirsiniz  </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Bu uygulama sayesinde dizi ve filimler hakkında yorumları görebilir seçimizi yapabilirsiniz. </p>

        </div>
        {/* Sağ taraf - resim kısmının olduğu alan.*/}
        <div className="hidden lg:mt-0 lg:col-span-5 md:flex">
            <img src="https://thenextfuture.b-cdn.net/wp-content/uploads/2022/05/CineTrak-1024x800.png" alt="AppScreenShots"/>
        </div> 

    </div>
</section>
  )
}
