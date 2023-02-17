import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex48Cb, useFlex46Cb, useFlex47Cb, useFlex44Cb, useFlex40Cb, useFlex32Cb, useFlex33Cb, useFlex41Cb, useFlex34Cb, useFlex35Cb, useFlex45Cb, useFlex42Cb, useFlex36Cb, useFlex37Cb, useFlex43Cb, useFlex38Cb, useFlex39Cb, useTextBox67Cb, useTextBox68Cb, useButton4Cb, useButton5Cb, useTextBox43Cb, useImage16Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useImage17Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useImage18Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useImage19Cb, useTextBox55Cb, useImage20Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useImage21Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useImage22Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useImage23Cb, useTextBox65Cb, useTextBox66Cb } from "../page-cbs/component5";
import "../page-css/component5.css";
import "../custom/component5";

export default function Component5() {
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

  const Flex48Props = useStore((state)=>state["component5"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["component5"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex46Props = useStore((state)=>state["component5"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["component5"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["component5"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["component5"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex44Props = useStore((state)=>state["component5"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["component5"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex40Props = useStore((state)=>state["component5"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["component5"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex32Props = useStore((state)=>state["component5"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["component5"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["component5"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["component5"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex41Props = useStore((state)=>state["component5"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["component5"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex34Props = useStore((state)=>state["component5"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["component5"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["component5"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["component5"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex45Props = useStore((state)=>state["component5"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["component5"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex42Props = useStore((state)=>state["component5"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["component5"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex36Props = useStore((state)=>state["component5"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["component5"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["component5"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["component5"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex43Props = useStore((state)=>state["component5"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["component5"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex38Props = useStore((state)=>state["component5"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["component5"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["component5"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["component5"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const TextBox67Props = useStore((state)=>state["component5"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["component5"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["component5"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["component5"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Button4Props = useStore((state)=>state["component5"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["component5"]["Button4"]);
const Button4Cb = useButton4Cb()
const Button5Props = useStore((state)=>state["component5"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["component5"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox43Props = useStore((state)=>state["component5"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["component5"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image16Props = useStore((state)=>state["component5"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["component5"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox44Props = useStore((state)=>state["component5"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["component5"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["component5"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["component5"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["component5"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["component5"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["component5"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["component5"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["component5"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["component5"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image17Props = useStore((state)=>state["component5"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["component5"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox49Props = useStore((state)=>state["component5"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["component5"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["component5"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["component5"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["component5"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["component5"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image18Props = useStore((state)=>state["component5"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["component5"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox52Props = useStore((state)=>state["component5"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["component5"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["component5"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["component5"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["component5"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["component5"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image19Props = useStore((state)=>state["component5"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["component5"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox55Props = useStore((state)=>state["component5"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["component5"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image20Props = useStore((state)=>state["component5"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["component5"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox56Props = useStore((state)=>state["component5"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["component5"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["component5"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["component5"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["component5"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["component5"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image21Props = useStore((state)=>state["component5"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["component5"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox59Props = useStore((state)=>state["component5"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["component5"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["component5"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["component5"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["component5"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["component5"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image22Props = useStore((state)=>state["component5"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["component5"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox62Props = useStore((state)=>state["component5"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["component5"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["component5"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["component5"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["component5"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["component5"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image23Props = useStore((state)=>state["component5"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["component5"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox65Props = useStore((state)=>state["component5"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["component5"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["component5"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["component5"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()

  return (<>
  <Flex2 className="p-component5 Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox2 className="p-component5 TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox2 className="p-component5 TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Flex2 className="p-component5 Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Flex2 className="p-component5 Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex2 className="p-component5 Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex2 className="p-component5 Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox2 className="p-component5 TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Image2 className="p-component5 Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox2 className="p-component5 TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox2 className="p-component5 TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex2>
<Flex2 className="p-component5 Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox2 className="p-component5 TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Image2 className="p-component5 Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox2 className="p-component5 TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox2 className="p-component5 TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-component5 Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Flex2 className="p-component5 Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<TextBox2 className="p-component5 TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Image2 className="p-component5 Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox2 className="p-component5 TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox2 className="p-component5 TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex2>
<Flex2 className="p-component5 Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox2 className="p-component5 TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image2 className="p-component5 Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox2 className="p-component5 TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox2 className="p-component5 TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-component5 Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex2 className="p-component5 Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex2 className="p-component5 Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox2 className="p-component5 TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Image2 className="p-component5 Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox2 className="p-component5 TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox2 className="p-component5 TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex2>
<Flex2 className="p-component5 Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox2 className="p-component5 TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Image2 className="p-component5 Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox2 className="p-component5 TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox2 className="p-component5 TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-component5 Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Flex2 className="p-component5 Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox2 className="p-component5 TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Image2 className="p-component5 Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox2 className="p-component5 TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox2 className="p-component5 TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex2>
<Flex2 className="p-component5 Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox2 className="p-component5 TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Image2 className="p-component5 Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox2 className="p-component5 TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox2 className="p-component5 TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-component5 Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Button2 className="p-component5 Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button2 className="p-component5 Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex2>
</Flex2>
  </>);
}
