import React from 'react';
import cn from 'classnames';
import { Trunk } from 'components/PageLayout';

function SiteHeader() {
	const styles = cn('bg-blue flex justify-between h3 pv3 white');

	return (
		<header role="banner" className={styles}>
			<Trunk centerY>App</Trunk>
		</header>
	);
}

export default SiteHeader;
