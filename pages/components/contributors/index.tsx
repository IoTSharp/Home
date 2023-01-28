import {FC} from "react";
import {Row, Col, Descriptions} from '@douyinfe/semi-ui';
import styles from "./styles.module.scss";
import Image from "next/image";
import ContributorForQQ from '@/public/contributor_1.png';
import ContributorForWechat from '@/public/contributor_2.png';

export interface IContributorsProps {
}

const Contributors: FC<IContributorsProps> = ({}) => {
  return (
    <div className={styles.contributorsContainer}>
      <p className={styles.title}>与用户共同成长</p>
      <p className={styles.subTitle}>IoTSharp 重视我们的用户，加入并助力我们不断完善</p>
      <Descriptions align="center" size="large" row>
        <Descriptions.Item itemKey="Stars">795+</Descriptions.Item>
        <Descriptions.Item itemKey="Fork">1100+</Descriptions.Item>
        <Descriptions.Item itemKey="Download">1000+</Descriptions.Item>
        <Descriptions.Item itemKey="Contributors">30+</Descriptions.Item>
      </Descriptions>
      <div className={styles.imageBox}>
        <Row type="flex" gutter={80}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Image src={ContributorForQQ} alt="" width={90} height={90}/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Image src={ContributorForWechat} alt="" width={90} height={90}/>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Contributors;
