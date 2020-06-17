import React from 'react';
import {Layout } from 'antd';
import { RouteComponentProps } from 'react-router';
import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props =>{ 
    return (
        <Layout className={styles.wrapper}>
            <Header>header</Header>
            <Layout className={styles.main}>
                <Sider className={styles.sider}>sider</Sider>
                <Content>{props.children}</Content>
            </Layout>
        </Layout>
    );
}

export default BasicLayout;