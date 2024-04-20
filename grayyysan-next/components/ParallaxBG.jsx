import Image from 'next/image'

const ParallaxBG = () => {
  return (
    <div
      className="mt-52 relative bg-fixed bg-center w-screen h-[40vh] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/IMG_6912.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
    </div>
  )
}

export default ParallaxBG
