import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button4 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex70Cb, useFlex68Cb, useFlex67Cb, useFlex65Cb, useFlex64Cb, useFlex66Cb, useFlex69Cb, useTextBox81Cb, useTextBox82Cb, useDiv3Cb, useImage43Cb, useImage44Cb, useTextBox79Cb, useTextBox80Cb, useImage37Cb, useTextBox77Cb, useTextBox78Cb, useImage38Cb, useImage39Cb, useImage40Cb, useImage41Cb, useImage42Cb, useButton12Cb, useButton13Cb } from "../page-cbs/demo";
import "../page-css/demo.css";
import "../custom/demo";

export default function Demo() {
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

  const Flex70Props = useStore((state)=>state["demo"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["demo"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex68Props = useStore((state)=>state["demo"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["demo"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex67Props = useStore((state)=>state["demo"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["demo"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex65Props = useStore((state)=>state["demo"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["demo"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex64Props = useStore((state)=>state["demo"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["demo"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex66Props = useStore((state)=>state["demo"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["demo"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex69Props = useStore((state)=>state["demo"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["demo"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const TextBox81Props = useStore((state)=>state["demo"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["demo"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["demo"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["demo"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Div3Props = useStore((state)=>state["demo"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["demo"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Image43Props = useStore((state)=>state["demo"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["demo"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["demo"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["demo"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox79Props = useStore((state)=>state["demo"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["demo"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["demo"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["demo"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image37Props = useStore((state)=>state["demo"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["demo"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox77Props = useStore((state)=>state["demo"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["demo"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["demo"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["demo"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image38Props = useStore((state)=>state["demo"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["demo"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["demo"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["demo"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["demo"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["demo"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["demo"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["demo"]["Image41"]);
const Image41Cb = useImage41Cb()
const Image42Props = useStore((state)=>state["demo"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["demo"]["Image42"]);
const Image42Cb = useImage42Cb()
const Button12Props = useStore((state)=>state["demo"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["demo"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["demo"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["demo"]["Button13"]);
const Button13Cb = useButton13Cb()

  return (<>
  <Flex4 className="p-demo Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox4 className="p-demo TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<TextBox4 className="p-demo TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<Flex4 className="p-demo Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image4 className="p-demo Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Flex4 className="p-demo Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex4 className="p-demo Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image4 className="p-demo Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Image4 className="p-demo Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<Image4 className="p-demo Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<Image4 className="p-demo Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Image4 className="p-demo Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex4>
<TextBox4 className="p-demo TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox4 className="p-demo TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<Flex4 className="p-demo Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image4 className="p-demo Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Flex4 className="p-demo Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox4 className="p-demo TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox4 className="p-demo TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Image4 className="p-demo Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex4>
<Flex4 className="p-demo Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Button4 className="p-demo Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button4 className="p-demo Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex4>
<Div className="p-demo Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}/>
</Flex4>
  </>);
}
