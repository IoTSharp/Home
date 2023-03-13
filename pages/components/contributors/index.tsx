import {FC} from "react";
import {Avatar, Card, Col, Descriptions, Row, Space} from '@douyinfe/semi-ui';
import styles from "./styles.module.scss";

export interface IContributorsProps {
}

const Contributors: FC<IContributorsProps> = ({}) => {
  const {Meta} = Card;
  const Comments = [{
    avatar: 'https://avatars.githubusercontent.com/u/29589505?v=4',
    name: 'IoTGateway 王海东',
    content: 'IoTSharp作为dotNet开源物联网平台的独苗，架构设计先进、可扩展性强、协议宽松。是你学习、评估、落地的最佳选择。',
    style: { marginTop: '40px'},
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'ThingsBoard中文网 王磊',
    content: 'IoTSharp一个开箱即用的开源物联网平台助力企业快速完成IoT数据采集，预警处理及数据可视化，保证项目质量提高项目交付率。'
  }]
  return (
    <div className={styles.contributorsContainer}>
      <p className={styles.title}>与用户共同成长</p>
      <p className={styles.subTitle}>IoTSharp 重视我们的用户，加入并助力我们不断完善</p>
      <Descriptions align="center" size="large" row>
        <Descriptions.Item itemKey="Stars">1800++</Descriptions.Item>
        <Descriptions.Item itemKey="Fork">600+</Descriptions.Item>
        <Descriptions.Item itemKey="Download">3400+</Descriptions.Item>
        <Descriptions.Item itemKey="Contributors">15+</Descriptions.Item>
      </Descriptions>
      <div className={styles.imageBox}>
        <Row gutter={32} type="flex" align="top">
          {
            Comments?.map((comment, index) => {
              return (
                <Col span={8} style={{...comment?.style}}>
                  <Card
                    footerLine={false}
                    headerLine={false}
                    title={
                      <Meta
                        avatar={
                          <Avatar
                            alt=""
                            size="default"
                            src={comment?.avatar}
                          />
                        }
                      />
                    }
                    footerStyle={{display: 'flex', justifyContent: 'flex-end'}}
                    footer={
                      <Space>
                        <div>{comment?.name}</div>
                      </Space>
                    }
                  >
                    {comment?.content}
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  );
};

export default Contributors;
