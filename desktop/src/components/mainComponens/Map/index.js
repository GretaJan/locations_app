import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/workerActions';
import { logout } from '../../../redux/actions/authActions';

//components
import Workers from './Workers';
import Empty from '../../modals/texts/EmptyArray';

const Homepage = ({ workers, token, emptyArray, fetchWorkers, logout }) => {

    useEffect(() => {
        fetchWorkers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logoutFunc = () => {
        console.log("hey", token)
        logout(token);
    }

    return (
        <div class="flex-right">
            <h1>Users Main</h1>
            { emptyArray !== '' ? (
                <Empty text={ emptyArray } />
            ) : (
                <div>
                    <Workers workers={ workers } />
                    <button onClick={ logoutFunc }>Logout</button>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    workers: state.workers.workers,
    emptyArray: state.workers.emptyArray,
    token: state.authorization.token,
})

export default connect(mapStateToProps, { fetchWorkers, logout })(Homepage)