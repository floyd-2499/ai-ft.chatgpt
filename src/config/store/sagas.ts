import { all } from 'redux-saga/effects'

import getChat from '../../api/chatgpt/sagas'

export default function* rootSaga(): Generator {
    yield all ([
        getChat()
    ])
}