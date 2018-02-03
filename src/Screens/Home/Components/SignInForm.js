import React, { Component } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Text, Button, Header, H1} from 'native-base';

export default class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
          <ScrollView style={styles.background}>
            <Modal
              >
            <Container>
                <Content>
                  <Header><H1 style={styles.pagetitle}>Sign In</H1></Header>
                    <List style={styles.form}>
                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Email" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Password" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={styles.button}><Text>Sign In</Text></Button>
                </Content>
            </Container>
          </Modal>
          </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#C3C48D",
  },
  pageTitle: {
    paddingTop: 5
  },
  form: {
    marginTop: 20,
    marginLeft: 10,
    marginRight:10,
    backgroundColor: "#C3C48D",
    paddingTop:5
  },

  button: {
    backgroundColor: "#928C6F",
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});