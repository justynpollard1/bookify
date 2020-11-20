import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/stack'
import { 
  StyleSheet, 
  SafeAreaView,
  View,
  Modal,
  Dimensions
} from 'react-native';

import PostPageA from './PostPageA'
import FnGButton from '../../components/Buttons/FnGButton'
import FnGAddABookButton from '../../components/Buttons/FnGPostABookButton'
import PostPageB from './PostPageB';

const screens = {
    PostA: {
        screen: PostPageA
    },
    PostB:{
        screen: PostPageB
    }
}

const postABookStack = createStackNavigator()

export default function ModalPostBook(){
    const [modalVisibility, setModalVisibility] = useState(false)
    const [postPageAViewVisibility, setPostPageAViewVisibility] = useState(false)
    const [postPageBViewVisibility, setPostPageBViewVisibility] = useState(false)

    const handleModalVisibilityOnPress = () => {
        setModalVisibility(true)
    }

    const handlePostPageAView = () => {
        setPostPageAViewVisibility(false)
    }
    return(
        <View>
            <Modal
              visible={modalVisibility}
              animated="slide">

                <View 
                 className='post-page-a'
                 visible={postPageAViewVisibility}>
                    <PostPageA></PostPageA>
                </View>

                <View
                 className='post-page-b'>

                </View>

                <View
                 className='modal-close-button'
                 style={styles.closeButtonStyle}>
                    <FnGButton 
                        text="X" 
                        onPress={ () => setModalVisibility(false)}
                        buttonStyle="close">
                    </FnGButton>
                </View>
            </Modal>


            <View>
                <FnGAddABookButton
                    onPress={handleModalVisibilityOnPress}>
                </FnGAddABookButton>
            </View>
        </View>
    )
}


const windowWidth = Dimensions.get('window').width
const paddingToLeft = windowWidth / 2.65

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    closeButtonStyle:{
        paddingTop: 15,
        paddingLeft: paddingToLeft
    }
})