import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a>홈이동</a>
        </Link>
      </Header>
      <Content>
        <div className="content">{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
