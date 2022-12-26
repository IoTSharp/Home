import {FC} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import bannerIcon from "@/public/banner.svg";
import IoTIcon from "@/public/iot.svg";
export interface IBannerProps {
}

export const Banner: FC<IBannerProps> = ({}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.subTitle}><Image src={IoTIcon} alt="" width={30} height={30}/>Internet of Things</div>
        <div className={styles.title}>IoTSharp</div>
        <div className={styles.title}>开源物联网平台</div>
        <div className={styles.description}>设备管理、数据存储和处理以及可视化你的IoT解决方案</div>
        <div className={styles.button}>快速上手</div>
      </div>
      <Image src={bannerIcon} alt="" width={400} height={400}/>
    </div>
  );
};
