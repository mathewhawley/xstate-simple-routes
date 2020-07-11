import React from 'react';
import cn from 'classnames';

export type Props = React.PropsWithChildren<{
	fullWidth?: boolean;
}>;

function Trunk(props: Props) {
	if (!props.children) {
		return null;
	}

	return (
		<div className="mh3">
			<div className={cn('center', props.fullWidth ? 'w-100' : 'w-100 mw8')}>{props.children}</div>
		</div>
	);
}

export default Trunk;
