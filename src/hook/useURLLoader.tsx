import * as React from 'react';
import axios from 'axios';

const useURLLoader = (url: string, deps: any[] = []) => {
   const [data, setData] = React.useState<any>(null);
   const [loading, setLoading] = React.useState(false);

   React.useEffect(() => {
       setLoading(true);
       axios.get(url).then(res => {
           setData(res.data);
           setLoading(false);
       })
   }, deps);
   return [data, loading];
}

export default useURLLoader;