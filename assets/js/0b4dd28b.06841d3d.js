"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14962],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",weight:3026},c=void 0,l={unversionedId:"k8s-in-rancher/horizontal-pod-autoscaler/horizontal-pod-autoscaler",id:"k8s-in-rancher/horizontal-pod-autoscaler/horizontal-pod-autoscaler",title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",source:"@site/docs/k8s-in-rancher/horizontal-pod-autoscaler/horizontal-pod-autoscaler.md",sourceDirName:"k8s-in-rancher/horizontal-pod-autoscaler",slug:"/k8s-in-rancher/horizontal-pod-autoscaler/",permalink:"/k8s-in-rancher/horizontal-pod-autoscaler/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/k8s-in-rancher/horizontal-pod-autoscaler/horizontal-pod-autoscaler.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",weight:3026}},u={},p=[{value:"Managing HPAs",id:"managing-hpas",level:2},{value:"Testing HPAs with a Service Deployment",id:"testing-hpas-with-a-service-deployment",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler")," (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down."),(0,a.kt)("p",null,"Rancher provides some additional features to help manage HPAs, depending on the version of Rancher."),(0,a.kt)("p",null,"You can create, manage, and delete HPAs using the Rancher UI. It only supports HPA in the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta2")," API."),(0,a.kt)("h2",{id:"managing-hpas"},"Managing HPAs"),(0,a.kt)("p",null,"The way that you manage HPAs is different based on your version of the Kubernetes API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For Kubernetes API version autoscaling/V2beta1:")," This version of the Kubernetes API lets you autoscale your pods based on the CPU and memory utilization of your application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For Kubernetes API Version autoscaling/V2beta2:")," This version of the Kubernetes API lets you autoscale your pods based on CPU and memory utilization, in addition to custom metrics.")),(0,a.kt)("p",null,"You can create, manage, and delete HPAs using the Rancher UI. From the Rancher UI you can configure the HPA to scale based on CPU and memory utilization. For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui"},"Managing HPAs with the Rancher UI"),". To scale the HPA based on custom metrics, you still need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-kubectl/#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"Configuring HPA to Scale Using Custom Metrics with Prometheus"),"."),(0,a.kt)("p",null,"Clusters created in Rancher v2.0.7 and higher automatically have all the requirements needed (metrics-server and Kubernetes cluster configuration) to use HPA."),(0,a.kt)("h2",{id:"testing-hpas-with-a-service-deployment"},"Testing HPAs with a Service Deployment"),(0,a.kt)("p",null,"You can see your HPA's current number of replicas by going to your project and clicking ",(0,a.kt)("strong",{parentName:"p"},"Resources > HPA"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/"},"Get HPA Metrics and Status"),"."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to get the status of HPAs that you test with your load testing tool. For more information, refer to ","[Testing HPAs with kubectl]","\n(k8s-in-rancher/horizontal-pod-autoscaler/testing-hpa/)."))}d.isMDXComponent=!0}}]);