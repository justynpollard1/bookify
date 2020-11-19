import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import PostPageA from './PostPageA'
import PostPageB from './PostPageB';

import { 
    View,
    StyleSheet, 
    SafeAreaView,
    Modal,
    Text
  } from 'react-native';
import { StackActions } from '@react-navigation/native';
import FnGButton from '../../components/Buttons/FnGButton'
import FnGAddABookButton from '../../components/Buttons/FnGPostABookButton'


const PostABookPagesStack = createStackNavigator()
export default function PostABookStack(){
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleModalVisibilityOnPress = () => {
        setModalVisibility(true)
    }

    return(
        <View>
            <Modal
            visible={setModalVisibility}
            animated="slide">

                <PostABookPagesStack.Navigator 
                initialRouteName="PostPageA">
                    <PostABookPagesStack.Screen
                    name='PostPageA'
                    component={PostPageA}>
                    </PostABookPagesStack.Screen>
                    <PostABookPagesStack.Screen
                    name='PostPageB'
                    component={PostPageB}>
                    </PostABookPagesStack.Screen>
                </PostABookPagesStack.Navigator>
            </Modal>

            <View>
                <FnGAddABookButton
                    onPress={handleModalVisibilityOnPress}>
                </FnGAddABookButton>
            </View>
    <View>{modalVisibility ?  <Text>True</Text> : <Text>False</Text>}</View>
        </View>
    )
}