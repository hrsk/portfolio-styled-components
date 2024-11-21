import React from "react";
import {Header} from "../../components/header/Header";
import sprite from "../../assets/contacts/sprite.svg";
import {Container} from "../../components";
import {Button, ContactContainer, ContactInfo, ContactInfoContainer, ContactWrapper, Field, Form, Icon} from "./styles";

export const Contacts = () => {
    return (
        <ContactWrapper>
            <Container>
                <Header description={"Feel free to contact me anytimes"}
                        title={"Get in Touch"}
                />
                <ContactContainer>
                    <ContactInfoContainer>
                        <h3>ADDRESS</h3>
                        <Icon>
                            <svg viewBox={'0 0 24 24'}>
                                <use xlinkHref={`${sprite}#${'me_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Name</span>
                                <p>Yahor Hurski</p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'location_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Location</span>
                                <p>
                                    Minsk, Belarus
                                </p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'call_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Call Me</span>
                                <p>+00000000000</p>
                            </ContactInfo>
                        </Icon>

                        <Icon>
                            <svg>
                                <use xlinkHref={`${sprite}#${'message_icon'}`}/>
                            </svg>
                            <ContactInfo>
                                <span>Email Me</span>
                                <p>chat@example.com</p>
                            </ContactInfo>
                        </Icon>

                    </ContactInfoContainer>
                    <Form>
                        <h3>SEND US A NOTE</h3>
                        <Field type={'text'} placeholder={'Name'} style={{gridArea: '2 / 2 / 3 / 2'}}/>
                        <Field type={'email'} placeholder={'Email'} style={{gridArea: '2 / 1 / 3 / 1'}}/>
                        <Field type={'text'} placeholder={'Subject'} style={{gridArea: '3 / 1 / 4 / 3'}}/>
                        <Field as={'textarea'} placeholder={'Message'}/>
                        <Button>Send Message</Button>
                    </Form>
                </ContactContainer>
            </Container>
        </ContactWrapper>
    );
}

