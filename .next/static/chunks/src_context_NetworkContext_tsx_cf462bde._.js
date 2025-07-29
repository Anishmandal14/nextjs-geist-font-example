(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/NetworkContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NetworkProvider": (()=>NetworkProvider),
    "useNetwork": (()=>useNetwork)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const NetworkContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Sample/mock data for demonstration
const initialDevices = [
    {
        id: '1',
        name: 'Core Router',
        type: 'Router',
        ip: '10.0.0.1',
        status: 'online',
        position: {
            x: 200,
            y: 100
        },
        description: 'Main core router for ISP backbone',
        location: 'Data Center A',
        vendor: 'Cisco',
        model: 'ASR 9000'
    },
    {
        id: '2',
        name: 'Distribution Switch',
        type: 'Switch',
        ip: '10.0.1.1',
        status: 'online',
        position: {
            x: 400,
            y: 200
        },
        description: 'Primary distribution switch',
        location: 'Data Center A',
        vendor: 'Juniper',
        model: 'EX4300'
    },
    {
        id: '3',
        name: 'Edge Firewall',
        type: 'Firewall',
        ip: '10.0.2.1',
        status: 'online',
        position: {
            x: 100,
            y: 250
        },
        description: 'Perimeter security firewall',
        location: 'Data Center A',
        vendor: 'Palo Alto',
        model: 'PA-5220'
    },
    {
        id: '4',
        name: 'Access Switch 1',
        type: 'Switch',
        ip: '10.0.3.1',
        status: 'offline',
        position: {
            x: 600,
            y: 150
        },
        description: 'Access layer switch - Building 1',
        location: 'Building 1',
        vendor: 'Cisco',
        model: 'Catalyst 2960'
    },
    {
        id: '5',
        name: 'Wireless Controller',
        type: 'Access Point',
        ip: '10.0.4.1',
        status: 'maintenance',
        position: {
            x: 300,
            y: 350
        },
        description: 'Centralized wireless controller',
        location: 'Data Center A',
        vendor: 'Aruba',
        model: '7030'
    }
];
const initialConnections = [
    {
        id: 'c1',
        sourceId: '1',
        targetId: '2',
        label: 'Trunk Link',
        type: 'fiber',
        bandwidth: '10Gbps'
    },
    {
        id: 'c2',
        sourceId: '1',
        targetId: '3',
        label: 'Security Link',
        type: 'ethernet',
        bandwidth: '1Gbps'
    },
    {
        id: 'c3',
        sourceId: '2',
        targetId: '4',
        label: 'Access Link',
        type: 'ethernet',
        bandwidth: '1Gbps'
    },
    {
        id: 'c4',
        sourceId: '2',
        targetId: '5',
        label: 'Management Link',
        type: 'ethernet',
        bandwidth: '100Mbps'
    }
];
const NetworkProvider = ({ children })=>{
    _s();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDevices);
    const [connections, setConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialConnections);
    const [selectedDevice, setSelectedDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const calculateStats = ()=>{
        const totalDevices = devices.length;
        const onlineDevices = devices.filter((d)=>d.status === 'online').length;
        const offlineDevices = devices.filter((d)=>d.status === 'offline').length;
        const maintenanceDevices = devices.filter((d)=>d.status === 'maintenance').length;
        return {
            totalDevices,
            onlineDevices,
            offlineDevices,
            maintenanceDevices
        };
    };
    const addDevice = (device)=>{
        setDevices((prev)=>[
                ...prev,
                device
            ]);
    };
    const updateDevice = (id, updates)=>{
        setDevices((prev)=>prev.map((device)=>device.id === id ? {
                    ...device,
                    ...updates
                } : device));
    };
    const removeDevice = (id)=>{
        setDevices((prev)=>prev.filter((device)=>device.id !== id));
        setConnections((prev)=>prev.filter((conn)=>conn.sourceId !== id && conn.targetId !== id));
        if (selectedDevice?.id === id) {
            setSelectedDevice(null);
        }
    };
    const addConnection = (connection)=>{
        setConnections((prev)=>[
                ...prev,
                connection
            ]);
    };
    const removeConnection = (id)=>{
        setConnections((prev)=>prev.filter((conn)=>conn.id !== id));
    };
    const searchDevices = (query)=>{
        if (!query.trim()) return devices;
        const lowercaseQuery = query.toLowerCase();
        return devices.filter((device)=>device.name.toLowerCase().includes(lowercaseQuery) || device.ip.includes(query) || device.type.toLowerCase().includes(lowercaseQuery) || device.location?.toLowerCase().includes(lowercaseQuery));
    };
    const value = {
        devices,
        connections,
        stats: calculateStats(),
        selectedDevice,
        addDevice,
        updateDevice,
        removeDevice,
        addConnection,
        removeConnection,
        setSelectedDevice,
        searchDevices
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NetworkContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/NetworkContext.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
};
_s(NetworkProvider, "SWiGxdJylkCoFI3E5yDgWwGgzr4=");
_c = NetworkProvider;
const useNetwork = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NetworkContext);
    if (context === undefined) {
        throw new Error('useNetwork must be used within a NetworkProvider');
    }
    return context;
};
_s1(useNetwork, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NetworkProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_NetworkContext_tsx_cf462bde._.js.map