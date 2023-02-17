import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex49Cb, useFlex50Cb, useFlex52Cb, useFlex51Cb, useImage24Cb, useTextBox69Cb, useTextBox70Cb, useButton7Cb, useButton8Cb } from "../page-cbs/component6";
import "../page-css/component6.css";
import "../custom/component6";

export default function Component6() {
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

  const Flex49Props = useStore((state)=>state["component6"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["component6"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["component6"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["component6"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex52Props = useStore((state)=>state["component6"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["component6"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex51Props = useStore((state)=>state["component6"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["component6"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Image24Props = useStore((state)=>state["component6"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["component6"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox69Props = useStore((state)=>state["component6"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["component6"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["component6"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["component6"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Button7Props = useStore((state)=>state["component6"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["component6"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["component6"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["component6"]["Button8"]);
const Button8Cb = useButton8Cb()

  return (<>
  <Flex1 className="p-component6 Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex1 className="p-component6 Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex1 className="p-component6 Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox1 className="p-component6 TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox1 className="p-component6 TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<Flex1 className="p-component6 Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Button1 className="p-component6 Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button1 className="p-component6 Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Image1 className="p-component6 Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex1>
  </>);
}
