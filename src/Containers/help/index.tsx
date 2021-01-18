import React from 'react';
import BreadCrumbs from './bread-crumbs';
import HelpSection from './help-section';
import DisplaySection from './display-section';
import { getPanelData } from '../../actions/data';
import './help.scss';
import Footer from './footer/footer';
import { useHistory } from 'react-router';

const panelData = getPanelData();

const Help = ({ ...props }) => {
	const history = useHistory();
	
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<>
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<div>
					<DisplaySection />
				</div>
			</div>
		</div>
		<Footer/>
		</>
	)
};

export default Help;
