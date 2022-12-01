import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Col, Row } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={6}></Col>
      </Row>

      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
