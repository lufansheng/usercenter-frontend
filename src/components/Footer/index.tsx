import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { PTU_LINK } from '@/constant';

const Footer: React.FC = () => {
  const defaultMessage = '帅哥集团技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'PTU',
          title: '葡萄学院',
          href: PTU_LINK,
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: <GithubOutlined />,
          href: 'https://gitee.com/',
          blankTarget: true,
        },
        {
          key: 'User manager',
          title: '用户管理',
          href: 'https://baike.baidu.com/item/%E6%BC%B3%E5%B9%B3%E5%B8%82/2506433',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
