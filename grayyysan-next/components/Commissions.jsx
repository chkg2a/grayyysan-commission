import Image from "next/image";
import { CHAT_1 } from "@/constants";
import { CHAT_2 } from "@/constants";
import { CHAT_3 } from "@/constants";
import ChatBubble from "./smallComponents/ChatBubble";

const Commissions = () => {
  return (
    <div id="commission" className="p-52 bg-black w-full h-full flex-col flex items-center">
      <div className="flex flex-col items-center text-white gap-2 pb-32">
        <h1 className="text-white font-semibold text-4xl lg:text-6xl">
          Commissions
        </h1>
        <p className="text-gray-500">
          Explore Grayyysan's beautifully drawn commissions
        </p>
      </div>
      <div className="flex w-6/7 h-full mt-20 justify-between">
        <div className="relative flex gap-10 justify-between w-full">
          <div className="flex flex-col flex-wrap">
            {CHAT_1.map((item) => (
              <div>
                <ChatBubble
                  username={item.username}
                  text={item.text}
                  chatStart={item.chatStart}
                  avatar={item.avatar}
                  seen={item.seen}
                />
              </div>
            ))}
            <div>
              <div className="h-auto overflow-hidden">
                <Image
                  className="w-[500px] h-full object-cover transition-all hover:scale-105"
                  src="/IMG_1912.jpg"
                  height="1920"
                  width="1080"
                  alt="Commissioned-works"
                />
              </div>

              {CHAT_3.map((item) => (
                <div>
                  <ChatBubble
                    username={item.username}
                    text={item.text}
                    chatStart={item.chatStart}
                    avatar={item.avatar}
                    seen={item.seen}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="h-full">
            <img src="/artist.svg" className="h-[55rem]" />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 w-full lg:w-[500px]">
              <div className="w-full h-auto lg:w-[250px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all hover:scale-105"
                  src="/UF-1.png"
                  height="1920"
                  width="1080"
                  alt="Commissioned-works"
                />
              </div>
              <div className="w-full h-auto lg:w-[250px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all hover:scale-105"
                  src="/UF-2.png"
                  height="1920"
                  width="1080"
                  alt="Commissioned-works"
                />
              </div>
              <div className="w-full h-auto lg:w-[250px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover  transition-all hover:scale-105"
                  src="/UF-3.png"
                  height="1920"
                  width="1080"
                  alt="Commissioned-works"
                />
              </div>
              <div className="w-full h-auto lg:w-[250px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover  transition-all hover:scale-105"
                  src="/UF-4.png"
                  height="1920"
                  width="1080"
                  alt="Commissioned-works"
                />
              </div>
              <div className="col-span-2">
                {CHAT_2.map((item, i) => (
                  <div>
                    {i == 2
                      ? (
                        <div className="w-full h-auto overflow-hidden">
                          <Image
                            className="w-full h-full object-cover transition-all hover:scale-105"
                            src="/UF-3.png"
                            height="1920"
                            width="1080"
                            alt="Commissioned-works"
                          />
                        </div>
                      )
                      : <></>}
                    <ChatBubble
                      username={item.username}
                      text={item.text}
                      chatStart={item.chatStart}
                      avatar={item.avatar}
                      seen={item.seen}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commissions;
