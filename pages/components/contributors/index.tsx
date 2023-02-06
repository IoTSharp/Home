import {FC} from "react";
import {Avatar, Card, Col, Descriptions, Row, Space} from '@douyinfe/semi-ui';
import styles from "./styles.module.scss";

export interface IContributorsProps {
}

const Contributors: FC<IContributorsProps> = ({}) => {
  const {Meta} = Card;
  const Comments = [{
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: '接入简单易上手；API 丰富全面。'
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: '有很多公司内的其他业务使用，有比较多的样例参考，参考其他业务平台的设计方案，统一平台的交付标准。',
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: '接入简单易上手；API 丰富全面。'
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: '接入简单易上手；API 丰富全面。'
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: 'API 丰富全面。',
    style: { marginTop: '40px'},
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'Mengzhou',
    content: '接入简单易上手；API 丰富全面。'
  }]
  return (
    <div className={styles.contributorsContainer}>
      <p className={styles.title}>与用户共同成长</p>
      <p className={styles.subTitle}>IoTSharp 重视我们的用户，加入并助力我们不断完善</p>
      <Descriptions align="center" size="large" row>
        <Descriptions.Item itemKey="Stars">600+</Descriptions.Item>
        <Descriptions.Item itemKey="Fork">150+</Descriptions.Item>
        <Descriptions.Item itemKey="Download">180+</Descriptions.Item>
        <Descriptions.Item itemKey="Contributors">30+</Descriptions.Item>
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
