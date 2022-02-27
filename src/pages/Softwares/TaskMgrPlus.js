import React from 'react';
import SoftPage from '../../components/SoftPage';
import TaskMgrImg from '../../images/TaskMgrPlus/1.png';

export default function TaskMgrPlus() {
	return (
		<React.Fragment>
			<SoftPage
				title="TaskMgr+"
				desc="打破传统。"
				dlimg={TaskMgrImg}
				link="https://gitee.com/Leo0707/TaskMgrPlus/releases"
			/>
		</React.Fragment>
	);
}
