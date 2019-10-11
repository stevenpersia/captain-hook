import { useEffect } from "react";
const useMeta = (metaArray) => {
	useEffect(() => {
		metaArray.map(uMeta => {
			const meta = document.querySelector(`meta[name="${uMeta.name}"]`);
			if(meta){
				meta.setAttribute("content", uMeta.content);
			}else{
				const newMeta = document.createElement('meta');
				newMeta.setAttribute('name', uMeta.name);
				newMeta.setAttribute('content',  uMeta.content);
				document.querySelector('head').appendChild(meta);
			}
		})
	});
};
export default useMeta;
