import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex53Cb, useFlex54Cb, useFlex62Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useFlex58Cb, useTextBox71Cb, useTextBox72Cb, useButton10Cb, useButton11Cb, useImage32Cb, useImage34Cb, useTextBox73Cb, useTextBox74Cb, useImage25Cb, useImage26Cb, useImage27Cb, useImage28Cb, useImage29Cb, useImage30Cb, useTextBox75Cb, useTextBox76Cb } from "../page-cbs/component7";
import "../page-css/component7.css";
import "../custom/component7";

export default function Component7() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex53Props = useStore((state)=>state["component7"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["component7"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["component7"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["component7"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex62Props = useStore((state)=>state["component7"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["component7"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex55Props = useStore((state)=>state["component7"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["component7"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["component7"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["component7"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["component7"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["component7"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["component7"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["component7"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const TextBox71Props = useStore((state)=>state["component7"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["component7"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["component7"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["component7"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Button10Props = useStore((state)=>state["component7"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["component7"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["component7"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["component7"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image32Props = useStore((state)=>state["component7"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["component7"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image34Props = useStore((state)=>state["component7"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["component7"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox73Props = useStore((state)=>state["component7"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["component7"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["component7"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["component7"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image25Props = useStore((state)=>state["component7"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["component7"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["component7"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["component7"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["component7"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["component7"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["component7"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["component7"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["component7"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["component7"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image30Props = useStore((state)=>state["component7"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["component7"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox75Props = useStore((state)=>state["component7"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["component7"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["component7"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["component7"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()

  return (<>
  <Flex3 className="p-component7 Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox3 className="p-component7 TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox3 className="p-component7 TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Flex3 className="p-component7 Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image3 className="p-component7 Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Flex3 className="p-component7 Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex3 className="p-component7 Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image3 className="p-component7 Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Image3 className="p-component7 Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image3 className="p-component7 Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Image3 className="p-component7 Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Image3 className="p-component7 Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex3>
<TextBox3 className="p-component7 TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox3 className="p-component7 TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Flex3 className="p-component7 Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Image3 className="p-component7 Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Flex3 className="p-component7 Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox3 className="p-component7 TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox3 className="p-component7 TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Image3 className="p-component7 Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex3>
<Flex3 className="p-component7 Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Button3 className="p-component7 Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button3 className="p-component7 Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex3>
</Flex3>
  </>);
}
