import React from 'react';
import cn from 'classnames';

export type Props = React.PropsWithChildren<{
	fullWidth?: boolean;
	centerY?: boolean;
}>;

function Trunk(props: Props) {
	if (!props.children) {
		return null;
	}

	const outerStyles = cn('mh3 w-100', props.centerY && 'flex');
	const innerStyles = cn(
		'center',
		props.fullWidth ? 'w-100' : 'w-100 mw8',
		props.centerY && 'flex items-center',
	);

	return (
		<div className={outerStyles}>
			<div className={innerStyles}>{props.children}</div>
		</div>
	);
}

export default Trunk;
