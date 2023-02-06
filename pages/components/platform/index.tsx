import {FC, useContext} from "react";
import {Carousel} from '@douyinfe/semi-ui';
import TenantImage from '@/public/img_9.png';
import TenantImageDark from '@/public/img_10.png';
import RuleImage from '@/public/img_6.png';
import RuleImageDark from '@/public/img_12.png';
import ResourceImage from '@/public/img_8.png';
import ResourceImageDark from '@/public/img_13.png';
import DeviceImage from '@/public/img_5.png';
import DeviceImageDark from '@/public/img_11.png';
import ProductImage from '@/public/img_7.png';
import ProductImageDark from '@/public/img_14.png';
import styles from "./styles.module.scss";
import {ThemeContext} from "@/stores/theme";
import {Themes} from "@/constants/enum";

export interface IPlatformProps {
}

const Platform: FC<IPlatformProps> = ({}) => {
  const {theme} = useContext(ThemeContext);
  const Options = [{
    image: theme === Themes.light ? TenantImage : TenantImageDark,
    title: '多租户',
    description: '通过多租户，充分的利用系统资源为多个客户提供服务并确保数据彻底隔离。'
  }, {
    image: theme === Themes.light ? DeviceImage : DeviceImageDark,
    title: '数字孪生',
    description: '通过数字孪生使得设备的属性数据、遥测数据、数据清洗、告警更容易管理和使用'
  }, {
    image: theme === Themes.light ? RuleImage : RuleImageDark,
    title: '规则链引擎',
    description: '通过规则链引擎利用多种语言脚本来扩展你对数据的分析和处理。'
  }, {
    image: theme === Themes.light ? ResourceImage : ResourceImageDark,
    title: '资产管理',
    description: '使用多个设备及其属性和遥测可抽象为资产更利于管理设备和数据分析。'
  },
    {
      image: theme === Themes.light ? ProductImage : ProductImageDark,
      title: '产品管理',
      description: '为设备或者网关提供简洁有效的数据模板、字典、认证、素材组织能力。'
    }]
  const style = {
    width: '100%',
    height: '400px',
  };
  return (
    <div className={styles.platformContainer}>
      <p className={styles.title}>打造现代 Web 应用</p>
      <p className={styles.subTitle}>与现代操作系统、浏览器更贴近的设计语言</p>
      <Carousel style={style} speed={1000} animation='fade' theme='dark' autoPlay={false} showIndicator={false}>
        {
          Options.map((option, index) => {
            return (
              <>
                <div key={index} style={{backgroundSize: 'cover', backgroundImage: `url(${option.image})`}}/>
                <div>
                  <div>{option.title}</div>
                  <div>{option.description}</div>
                </div>
              </>
            );
          })
        }
      </Carousel>
    </div>
  );
};

export default Platform;
