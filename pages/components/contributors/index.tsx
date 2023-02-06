import {FC} from "react";
import {Row, Col, Descriptions, Card, Avatar, Space, Button, Typography} from '@douyinfe/semi-ui';
import styles from "./styles.module.scss";

export interface IContributorsProps {
}

const Contributors: FC<IContributorsProps> = ({}) => {
  const { Meta } = Card;
  const { Text } = Typography;
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
        <Row gutter={32} type="flex" align="top">
          <Col span={8}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              接入简单易上手；API 丰富全面。
            </Card>
          </Col>
          <Col span={8}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              有很多公司内的其他业务使用，有比较多的样例参考，参考其他业务平台的设计方案，统一平台的交付标准。
            </Card>
          </Col>
          <Col span={8}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              接入简单易上手；API 丰富全面。
            </Card>
          </Col>
          <Col span={8}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              接入简单易上手；API 丰富全面。
            </Card>
          </Col>
          <Col span={8} style={{marginTop: '40px'}}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              接入简单易上手。
            </Card>
          </Col>
          <Col span={8}>
            <Card
              footerLine={false}
              headerLine={false}
              title={
                <Meta
                  title=""
                  description=""
                  avatar={
                    <Avatar
                      alt='Card meta img'
                      size="default"
                      src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                    />
                  }
                />
              }
              footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              footer={
                <Space>
                  <div>@Mengzhou</div>
                </Space>
              }
            >
              接入简单易上手；API 丰富全面。
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contributors;
