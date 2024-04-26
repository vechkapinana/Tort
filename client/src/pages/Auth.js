import { Card, Form } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Input } from 'antd';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';
//import Col from 'react-bootstrap/Col';


function Auth() {
    const location = useLocation()
    //console.log(location)
    const isLogin = location.pathname === AUTH_ROUTE
	return (
		<>
        <Container 
            className='d-flex align-items-center justify-content-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{ isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                <Form.Item className='mt-2' label='Логин'>
                <Input allowClear />
                </Form.Item>   

                <Form.Item className='mt-2' label='Пароль'>
                <Input allowClear />
                </Form.Item> 
                <Row className='d-flex justify-content-beween mt-3 pl-3 pr-3' >
                    {isLogin ?
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся! </NavLink>
                    </div>
                    :
                    <div>
                        Есть аккаунт? <NavLink to={AUTH_ROUTE}> Войдите! </NavLink>
                    </div>
                    }
                    <Button variant='outline-dark'>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button> 

                </Row>

                </Form>
            </Card>
			
		</Container>
		</>
	)
}

export default Auth