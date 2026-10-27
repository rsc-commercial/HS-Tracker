const rawProjects = [{"name":"2026-RH-GRAND HYATT BAHA MAR","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":26,"pic":"TRINH","sw":"2026/W22 - 2026/W34","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"BS","total_val":2454227.83,"monthly":{"2026/M05":153379.0,"2026/M06":1004676.0,"2026/M07":969712.83,"2026/M08":326460.0}},{"name":"2026-RH-GRAND HYATT BAHA MAR-PHASE 2","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":31,"pic":"BIEN","sw":"2027/W16 - 2027/W26","drawing":"In Progress","veneer":"In Progress","metal":"Not Started","market":"BS","total_val":2935981.52,"monthly":{"2027/M04":1000000.0,"2027/M05":1000000.0,"2027/M06":935981.52}},{"name":"2025-RH-FOX HARBOR","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":26,"pic":"TUYET","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"CA","total_val":102220.55,"monthly":{"2026/M04":30383.55,"2026/M01":71837.0}},{"name":"2025-RH-RH CASSIA CONDO","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":50,"pic":"TRINH","sw":"2026/W30 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1161167.0,"monthly":{"2026/M07":269518.0,"2026/M08":760037.0,"2026/M09":131612.0}},{"name":"2025-RH-MAIN STREET BOUTIQUE HOTEL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":9,"pic":"DUNG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":54061.6,"monthly":{"2026/M04":54061.6}},{"name":"2025-RH-CHICAGO PENDRY","status":"REMOVED","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"DUNG","sw":"2026/W14 - 2026/W14","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"US","total_val":135705.0,"monthly":{"2026/M10":135705.0}},{"name":"2026-RH-CIA O&O GUESTROOMS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"DUNG","sw":"2027/W27 - 2027/W28","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":143556.09,"monthly":{"2027/M07":143556.09}},{"name":"2026-RH-HA STUDIO PICO/WILKINS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TU ANH","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":12309.0,"monthly":{"2026/M06":12309.0}},{"name":"2026-RH-HA STUDIO PICO/WILKINS-REODER","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"DUY","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3454.0,"monthly":{"2026/M11":3454.0}},{"name":"2026-RH-NAMA LISBON","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":11,"pic":"DUY","sw":"2026/W37 - 2026/W37","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"PT","total_val":74720.0,"monthly":{"2026/M09":74720.0}},{"name":"2026-RH-NAMA LISBON","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":11,"pic":"DUY","sw":"2026/W44 - 2026/W44","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"PT","total_val":127455.0,"monthly":{"2026/M10":127455.0}},{"name":"2026-RH-NAMA LISBON-PUBLIC SPACE","status":"NOR","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"DUY","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"Approved","metal":"TBC","market":"PT","total_val":2190.15,"monthly":{"2027/M01":2190.15}},{"name":"2026-RH-RANCHO VALENCIA","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TRINH","sw":"TBC - TBC","drawing":"Pending Approval","veneer":"Approved","metal":"TBC","market":"US","total_val":14520.0,"monthly":{}},{"name":"2026-RH-RH CONTRACT (LARA CHAIR 25)","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"THU","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":4200.0,"monthly":{"2026/M03":4200.0}},{"name":"2025-RH-RH TRUMP SUITES NYC","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"DUONG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1234.86,"monthly":{"2026/M06":1234.86}},{"name":"2024-RH-TRUMP DORAL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TUYET","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1375.5,"monthly":{"2026/M07":1375.5}},{"name":"2026-RH-RH TRUMP SUITES NYC","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":24,"pic":"TBC","sw":"2027/W19 - 2027/W26","drawing":"Pending Approval","veneer":"Approved","metal":"Approved","market":"US","total_val":1074318.51,"monthly":{"2027/M05":537160.0,"2027/M06":537158.51}},{"name":"2026-RH-ROSEWOOD CALISTOGA","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":6,"pic":"BIEN","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1046.75,"monthly":{"2026/M06":1046.75}},{"name":"2025-RH-ROSEWOOD CALISTOGA","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":38,"pic":"BIEN","sw":"2026/W45 - 2026/W50","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":311473.76,"monthly":{"2026/M11":239023.0,"2026/M12":72450.76}},{"name":"2026-RH-SNAKE RIVER LODGE BLUEFLAG","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"DUY","sw":"2026/W32 - 2026/W35","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":203436.49,"monthly":{"2026/M08":203436.49}},{"name":"2026-RH-SNAKE RIVER LODGE BLUEFLAG-ADDITIONAL","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"DUY","sw":"2027/W05 - 2027/W05","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3080.0,"monthly":{"2027/M01":3080.0}},{"name":"2025-RH-TRUMP LAS VEGAS PENTHOUSES","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":36,"pic":"BIEN","sw":"2027/W02 - 2027/W05","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":558793.0,"monthly":{"2027/M01":558793.0}},{"name":"2026-RH-RITZ DOVE MOUNTAIN","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":14,"pic":"DUY","sw":"2027/W15 - 2027/W17","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":228581.0,"monthly":{"2027/M04":228581.0}},{"name":"2026-RH-MAYBOURNE_ONE WALL STREET NY","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TU ANH","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":1672.0,"monthly":{"2026/M04":1672.0}},{"name":"2024-RH-ST. REGIS KANAI","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"TRINH","sw":"2026/W31 - 2026/W32","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"MX","total_val":164002.14,"monthly":{"2026/M07":110307.0,"2026/M08":53695.14}},{"name":"2026-RH-CIA O&O GUESTROOMS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":12,"pic":"DUNG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":12000.06,"monthly":{"2026/M06":12000.06}},{"name":"2026-COSMIC REALTY-250 FIFTH AVENUE HOTEL","status":"SHIPPED","customer":"COSMIC REALTY","type":"NON RH","stage":"NPI","sku":17,"pic":"THU","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":53035.8,"monthly":{"2026/M04":1908.8,"2026/M02":51127.0}},{"name":"2026-L&S-ELYSEE HOTEL","status":"SHIPPED","customer":"L&S","type":"NON RH","stage":"NPI","sku":22,"pic":"THAO","sw":"2026/W32 - 2026/W37","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":172960.83,"monthly":{"2026/M08":89785.84,"2026/M09":83174.99}},{"name":"2026-L&S-FAENA TULLUM (FTMX)","status":"FC","customer":"L&S","type":"NON RH","stage":"NPI","sku":16,"pic":"TBC","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"MX","total_val":1160820.0,"monthly":{"2027/M10":1160820.0}},{"name":"2025-FLEETWOOD -FOUR SEASON JACKSONVILLE","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":25,"pic":"TU ANH","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":198022.11,"monthly":{"2026/M04":56748.11,"2026/M05":87190.0,"2026/M06":54084.0}},{"name":"2026-FLEETWOOD -HARD ROCK LAS VEGAS WEST TOWER","status":"DROPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":94,"pic":"THAO","sw":"TBC - TBC","drawing":"In Progress","veneer":"Approved","metal":"Pending Approval","market":"US","total_val":3218808.0,"monthly":{"2027/M01":1072936.0,"2027/M02":500000.0,"2027/M03":1072936.0,"2027/M04":572936.0}},{"name":"2025-FLEETWOOD -HWVP PHASE 2","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":7,"pic":"DUNG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":7015.5,"monthly":{"2026/M04":7015.5}},{"name":"2026-THE PARKER-JAMES NY NOMAD","status":"CANCELLED","customer":"THE PARKER","type":"NON RH","stage":"NPI","sku":1,"pic":"SANG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3167.51,"monthly":{"2026/M05":3167.51}},{"name":"2025-KD-KNOX DALLAS","status":"SHIPPED","customer":"KD","type":"NON RH","stage":"NPI","sku":30,"pic":"DUONG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":187373.64,"monthly":{"2026/M03":22782.88,"2026/M04":68348.76,"2026/M09":96242.0}},{"name":"2026-KD-KNOX DALLAS SUITE","status":"SHIPPED","customer":"KD","type":"NON RH","stage":"NPI","sku":50,"pic":"PHONG","sw":"2026/W39 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":98457.81,"monthly":{"2026/M10":98457.81}},{"name":"2025-KD-KNOX DALLAS SUITE","status":"OB","customer":"KD","type":"NON RH","stage":"NPI","sku":50,"pic":"PHONG","sw":"2026/W39 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":208884.94,"monthly":{"2026/M11":148976.37,"2026/M12":59908.57}},{"name":"2026-KD-KNOX DALLAS INSPECTION COVERS","status":"OB","customer":"KD","type":"NON RH","stage":"NPI","sku":3,"pic":"PHONG","sw":"2026/W52 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":2680.0,"monthly":{"2026/M12":2680.0}},{"name":"2026-AHMADIAH-MARRIOTT KHOBAR","status":"REMOVED","customer":"AHMADIAH","type":"NON RH","stage":"NPI","sku":35,"pic":"THU","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"SA","total_val":0.0,"monthly":{}},{"name":"2025-MOHI-MOHI APPELLATION","status":"SHIPPED","customer":"MOHI","type":"NON RH","stage":"NPI","sku":28,"pic":"TUYET","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":357775.0,"monthly":{"2026/M05":178386.0,"2026/M06":179389.0}},{"name":"2026-MOHI-MOHI APPELLATION","status":"SHIPPED","customer":"MOHI","type":"NON RH","stage":"NPI","sku":13,"pic":"DUY","sw":"2026/W39 - 2026/W41","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":100243.0,"monthly":{"2026/M10":100243.0}},{"name":"2025-L&S-RITZ CARLTON COTTON BAY","status":"PIPELINE","customer":"L&S","type":"NON RH","stage":"NPI","sku":117,"pic":"TBC","sw":"2027/W40 - 2027/W52","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"BS","total_val":3134000.0,"monthly":{"2027/M10":1044666.67,"2027/M11":1044666.67,"2027/M12":1044666.67}},{"name":"2025-PLUS CORPORATION-SOHO HOUSE TOKYO","status":"SHIPPED","customer":"PLUS CORPORATION","type":"NON RH","stage":"NPI","sku":48,"pic":"THAO","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JP","total_val":24012.0,"monthly":{"2026/M03":21344.0,"2026/M05":2668.0}},{"name":"2026-SPECTRUM-1122 MADISON","status":"SHIPPED","customer":"SPECTRUM","type":"NON RH","stage":"NPI","sku":20,"pic":"THAO","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":93065.0,"monthly":{"2026/M07":93065.0}},{"name":"2026-TRIMA-JRH","status":"SHIPPED","customer":"TRIMA","type":"NON RH","stage":"NPI","sku":4,"pic":"DUONG","sw":"2026/W29 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JM","total_val":1035310.67,"monthly":{"2026/M07":525145.2,"2026/M08":471952.96,"2026/M09":38212.51}},{"name":"2026-BROOKFIELD-PARK HYATT VANCOUVER","status":"SHIPPED","customer":"BROOKFIELD","type":"NON RH","stage":"NPD","sku":9,"pic":"DUNG","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"In Progress","market":"CA","total_val":14470.66,"monthly":{"2026/M05":14470.66}},{"name":"2026-BROOKFIELD-PARK HYATT VANCOUVER","status":"DROPPED","customer":"BROOKFIELD","type":"NON RH","stage":"NPI","sku":9,"pic":"DUNG","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"CA","total_val":802234.0,"monthly":{"2027/M05":401117.0,"2027/M06":401117.0}},{"name":"2025-FLEETWOOD -W-HOTEL-LAS-VEGAS","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPD","sku":12,"pic":"NHI","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":15271.3,"monthly":{"2026/M03":15271.3,"2026/M09":0.0}},{"name":"2025-FLEETWOOD -W-HOTEL-LAS-VEGAS","status":"FC","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":12,"pic":"BIEN","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"US","total_val":3466407.0,"monthly":{"2027/M05":1155469.0,"2027/M06":1155469.0,"2027/M07":1155469.0}},{"name":"2026-L&S-HARD ROCK SAN JUAN","status":"ON HOLD","customer":"L&S","type":"NON RH","stage":"NPD","sku":16,"pic":"THAO","sw":"2026/W42 - 2026/W44","drawing":"In Progress","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":1506614.04,"monthly":{"2026/M09":6614.04,"2027/M09":750000.0,"2027/M10":750000.0}},{"name":"2026-SPECTRUM-OTMB VANITY","status":"SHIPPED","customer":"SPECTRUM","type":"NON RH","stage":"NPD","sku":4,"pic":"DUNG","sw":"2026/W37 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3273.0,"monthly":{"2026/M08":3273.0}},{"name":"2026-SPECTRUM-OTMB VANITY","status":"FC","customer":"SPECTRUM","type":"NON RH","stage":"NPI","sku":4,"pic":"DUNG","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":179782.0,"monthly":{"2027/M03":179782.0}},{"name":"2026-AYALA-KHOBAR HILTON CANOPY HOTEL","status":"SHIPPED","customer":"AYALA","type":"NON RH","stage":"NPD","sku":9,"pic":"BIEN","sw":"2026/W35 - 2026/W35","drawing":"In Progress","veneer":"In Progress","metal":"Pending Approval","market":"SA","total_val":7901.24,"monthly":{"2026/M08":7901.24}},{"name":"2026-BENJAMIN-HACIENDA HOTEL LISBON PORTUGAL","status":"OB","customer":"BENJAMIN","type":"NON RH","stage":"NPD","sku":21,"pic":"BIEN","sw":"2026/W46 - 2026/W51","drawing":"Pending Approval","veneer":"Pending Approval","metal":"In Progress","market":"PT","total_val":32000.0,"monthly":{"2026/M12":32000.0}},{"name":"2026-BENJAMIN-HACIENDA HOTEL LISBON PORTUGAL","status":"FC","customer":"BENJAMIN","type":"NON RH","stage":"NPI","sku":122,"pic":"BIEN","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"PT","total_val":596794.0,"monthly":{"2027/M06":596794.0}},{"name":"2026-WOODHAUS-KNOX HENDERSON","status":"SHIPPED","customer":"WOODHAUS","type":"NON RH","stage":"NPI","sku":12,"pic":"DUY","sw":"2026/W32 - 2026/W32","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":22198.0,"monthly":{"2026/M08":22198.0}},{"name":"2026-TRIMA-JOIA TIERRA DEL SOL","status":"PIPELINE","customer":"TRIMA","type":"NON RH","stage":"NPI","sku":0,"pic":"THAO","sw":"TBC - TBC","drawing":"Not Started","veneer":"TBC","metal":"TBC","market":"AR","total_val":2263628.0,"monthly":{"2027/M07":1131814.0,"2027/M08":1131814.0}},{"name":"2026-RH-RED SEA","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":0,"pic":"TBC","sw":"2027/W37 - 2027/W39","drawing":"Not Started","veneer":"TBC","metal":"TBC","market":"SA","total_val":1000000.0,"monthly":{"2027/M09":1000000.0}},{"name":"2026-RH-VICEROY SUGAR BEACH - ASH WOOD VERSION","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"BIEN","sw":"2026/W39 - 2026/W39","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"LC","total_val":149029.0,"monthly":{"2026/M09":149029.0}},{"name":"TBC-L&S-SILVERSANDS GRAND ANSE","status":"REJECTED","customer":"L&S","type":"NON RH","stage":"NPI","sku":55,"pic":"THAO","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"Grenada (Caribbean)","total_val":371262.0,"monthly":{}},{"name":"2026-SPECTRUM-PROJECT 550","status":"SHIPPED","customer":"SPECTRUM","type":"NON RH","stage":"NPD","sku":4,"pic":"DUNG","sw":"2026/W37 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"In Progress","market":"US","total_val":6938.58,"monthly":{"2026/M08":6938.58}},{"name":"2026-SPECTRUM-PROJECT 550","status":"FC","customer":"SPECTRUM","type":"NON RH","stage":"NPI","sku":30,"pic":"DUNG","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":361028.77,"monthly":{"2027/M04":361028.77}},{"name":"2026-FLEETWOOD -AUBERGE HOUSTON MR","status":"CANCELLED","customer":"FLEETWOOD","type":"NON RH","stage":"NPD","sku":4,"pic":"DUNG","sw":"ON HOLD - ON HOLD","drawing":"Pending Approval","veneer":"Approved","metal":"In Progress","market":"US","total_val":722063.67,"monthly":{"2026/M09":15040.19}},{"name":"2026-RH-AWH TOPNOTCH","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":17,"pic":"DUY","sw":"2026/W50 - 2026/W52","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":563394.1,"monthly":{"2026/M12":31219.1,"2027/M05":532175.0}},{"name":"2026-FLEETWOOD -SPANISH BAY CLUB","status":"OB","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":15,"pic":"THAO","sw":"2026/W45 - 2026/W48","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":64112.41,"monthly":{"2026/M11":64112.41}},{"name":"2026-FLEETWOOD -HWVP PHASE 2","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":7,"pic":"SHIPPED","sw":"TBC - TBC","drawing":"Approved","veneer":"TBC","metal":"TBC","market":"US","total_val":1601.0,"monthly":{"2026/M01":1601.0}},{"name":"2026-KD-KNOX DALLAS","status":"SHIPPED","customer":"KD","type":"NON RH","stage":"NPI","sku":30,"pic":"SHIPPED","sw":"TBC - TBC","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":395880.94,"monthly":{"2026/M01":362480.94,"2026/M02":33400.0}},{"name":"2026-KD-KNOX DALLAS- 1198-1509","status":"NOR","customer":"KD","type":"NON RH","stage":"NPI","sku":1,"pic":"PHONG","sw":"2027/W14 - 2027/W14","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":7894.0,"monthly":{"2027/M04":7894.0}},{"name":"2026-PLUS CORPORATION-SOHO HOUSE TOKYO","status":"SHIPPED","customer":"PLUS CORPORATION","type":"NON RH","stage":"NPI","sku":48,"pic":"SHIPPED","sw":"TBC - TBC","drawing":"Approved","veneer":"TBC","metal":"TBC","market":"Japan","total_val":104927.0,"monthly":{"2026/M01":24407.0,"2026/M02":80520.0}},{"name":"2026-RH-RH BRANDYWINE","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"SHIPPED","sw":"TBC - TBC","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5432.2,"monthly":{"2026/M01":5432.2}},{"name":"2026-BROOKFIELD-RITZ CARLTON PHILADELPHIA","status":"SHIPPED","customer":"BROOKFIELD","type":"NON RH","stage":"NPD","sku":6,"pic":"DUNG","sw":"2026/W29 - 2026/W29","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":13583.73,"monthly":{"2026/M07":13583.73}},{"name":"2026-RH-CUSTOM MIYU TABLES","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":5,"pic":"BIEN","sw":"2026/W29 - 2026/W29","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5617.6,"monthly":{"2026/M07":5617.6}},{"name":"2026-RH-GRAND HYATT DENVER","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":2,"pic":"DUY","sw":"2026/W44 - 2026/W44","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5542.32,"monthly":{"2026/M10":5542.32}},{"name":"2026-RH-COMPETITIVE EDGE","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":3,"pic":"TBC","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"US","total_val":847691.0,"monthly":{}},{"name":"2026-FLEETWOOD -WALDORF ASTORIA DEER VALLEY","status":"PIPELINE","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":13,"pic":"THAO","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"US","total_val":5665882.98,"monthly":{"2027/M06":1133176.6,"2027/M07":1133176.6,"2027/M08":1133176.6,"2027/M09":1133176.6,"2027/M10":1133176.6}},{"name":"2026-FLEETWOOD -PEBBLE BEACH CASA PALMERO","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":2,"pic":"THAO","sw":"2026/W41 - 2026/W41","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":13541.25,"monthly":{"2026/M10":13541.25}},{"name":"2026-RH-SUNRIVER RESORT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"BIEN","sw":"2026/W27 - 2026/W27","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1017.32,"monthly":{"2026/M06":1017.32}},{"name":"2026-RH-SUNRIVER RESORT","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":8,"pic":"PHONG","sw":"2027/W13 - 2027/W14","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Approved","market":"US","total_val":37552.0,"monthly":{"2027/M04":37552.0}},{"name":"2026-BROOKFIELD-RITZ CARLTON PHILADELPHIA","status":"DROPPED","customer":"BROOKFIELD","type":"NON RH","stage":"NPI","sku":11,"pic":"DUNG","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":1985000.0,"monthly":{"2027/M01":400000.0,"2027/M03":792500.0,"2027/M04":792500.0}},{"name":"2026-AYALA-KHOBAR HILTON CANOPY HOTEL","status":"FC","customer":"AYALA","type":"NON RH","stage":"NPI","sku":9,"pic":"BIEN","sw":"2027/W10 - 2027/W13","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"SA","total_val":897832.0,"monthly":{"2027/M04":897832.0}},{"name":"2026-TRIMA-ASIATICO RESTAURANT","status":"SHIPPED","customer":"TRIMA","type":"NON RH","stage":"NPI","sku":32,"pic":"TRINH","sw":"2026/W35 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JM","total_val":168430.26,"monthly":{"2026/M08":46234.26,"2026/M09":122196.0}},{"name":"2026-RH-MONTAUK YACHT CLUB","status":"CANCELLED","customer":"RH","type":"RH","stage":"NPD","sku":5,"pic":"BIEN","sw":"2026/W33 - 2026/W33","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":1112433.68,"monthly":{"2026/M08":12433.68,"2027/M06":1100000.0}},{"name":"2026-HBA-HILTON PASADENA","status":"OB","customer":"HBA","type":"NON RH","stage":"NPI","sku":5,"pic":"DUNG","sw":"2026/W45 - 2026/W45","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":22890.48,"monthly":{"2026/M11":22890.48}},{"name":"2026-FLEETWOOD -FAIRMONT HOTEL WINNIPEG","status":"REMOVED","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":32,"pic":"THAO","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"CA","total_val":79655.52,"monthly":{}},{"name":"2026-L&S-THE STANDARD MIAMI HOTEL","status":"OB","customer":"L&S","type":"NON RH","stage":"NPI","sku":24,"pic":"DUNG","sw":"2026/W46 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":48791.87,"monthly":{"2026/M11":48791.87}},{"name":"2026-RH-KINDERED KEYSTONE RESORT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"DUY","sw":"2026/W36 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":1142.75,"monthly":{"2026/M08":1142.75}},{"name":"2026-HBA-MARRIOTT GUYANA PUBLIC AREAS","status":"ON HOLD","customer":"HBA","type":"NON RH","stage":"NPI","sku":3,"pic":"DUY","sw":"2026/W42 - 2026/W42","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"GY","total_val":25129.08,"monthly":{"2026/M10":25129.08}},{"name":"2026-RH-BELGROVE VILLAS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TRAN","sw":"2026/W39 - 2026/W39","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":13398.0,"monthly":{"2026/M09":13398.0}},{"name":"2026-BISCAYNE-PARK_AVENUE_HOTEL","status":"OB","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":3,"pic":"BIEN","sw":"2026/W43 - 2026/W43","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":2843.6,"monthly":{"2026/M10":2843.6}},{"name":"TBC-BISCAYNE-PARK_AVENUE_HOTEL","status":"PIPELINE","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":17,"pic":"BIEN","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":780835.84,"monthly":{}},{"name":"2026-RH-CAUDWELL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"BIEN","sw":"2026/W30 - 2026/W30","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":499.5,"monthly":{"2026/M07":499.5}},{"name":"2026-RH-FOUR SEASONS  DENVER","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"DUY","sw":"2027/W05 - 2027/W05","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"US","total_val":4003.5,"monthly":{"2027/M01":4003.5}},{"name":"2026-RH-MUNISH","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"DUY","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"TBC","total_val":0.0,"monthly":{}},{"name":"2026-RH-MAUNA LANI","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"DUY","sw":"2026/W02 - 2026/W02","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3240.0,"monthly":{"2027/M01":3240.0}},{"name":"2026-RH-GOLDEN PEAK","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"BIEN","sw":"2026/W31 - 2026/W31","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"TBC","total_val":1466.0,"monthly":{"2026/M07":1466.0}},{"name":"2026-RH-CUSTOM BEDS FOR EU","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"DUY","sw":"2027/W05 - 2027/W05","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"EU","total_val":8455.52,"monthly":{"2027/M01":8455.52}},{"name":"2026-BWG -MUSE POINT APARTMENT","status":"SHIPPED","customer":"BWG","type":"NON RH","stage":"NPD","sku":9,"pic":"DUONG","sw":"2026/W38 - 2026/W38","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"AU","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-DANCING BEAR","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":17,"pic":"DUY","sw":"2026/W43 - 2026/W43","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":33810.54,"monthly":{"2026/M11":33810.54}},{"name":"2026-RH-DANCING BEAR","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"DUY","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"In Progress","market":"US","total_val":299970.29,"monthly":{"2027/M05":299970.29}},{"name":"2026-RH-FOOTES REST","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":15,"pic":"DUNG","sw":"2026/W46 - 2026/W46","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":32385.58,"monthly":{"2026/M11":32385.58}},{"name":"2026-RH-FOOTES REST","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"DUNG","sw":"2027/W29 - 2027/W34","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":543005.0,"monthly":{"2027/M07":271502.5,"2027/M08":271502.5}},{"name":"2026-RH-RITZ CABO VILLA","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"TRAN","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"Mexico","total_val":9809.0,"monthly":{}},{"name":"2026-FLEETWOOD -BDNY","status":"SHIPPED","customer":"FLEETWOOD","type":"NON RH","stage":"NPD","sku":3,"pic":"THAO","sw":"2026/W40 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-AHS ONE CANAL CRESENT","status":"REMOVED","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"BIEN","sw":"2026/W37 - 2026/W37","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"US","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-1419 MONUMENT HOTEL","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"TRAN","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":6068.79,"monthly":{"2026/M12":6068.79}},{"name":"2026-SH-OAKLEY COURT MINI BAR BRIEF","status":"OB","customer":"SH","type":"NON RH","stage":"NPD","sku":1,"pic":"PHONG","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":2230.98,"monthly":{"2026/M10":2230.98}},{"name":"2026-SH-OAKLEY COURT MINI BAR BRIEF","status":"FC","customer":"SH","type":"NON RH","stage":"NPI","sku":4,"pic":"PHONG","sw":"2027/W15 - 2027/W16","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"UK","total_val":210727.22,"monthly":{"2027/M04":210727.22}},{"name":"2026-AG-8 EATON LANE","status":"OB","customer":"AG","type":"NON RH","stage":"NPI","sku":7,"pic":"TRAN","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":15139.0,"monthly":{"2026/M12":15139.0}},{"name":"2026-AG-BOARDROOM FURNITURE","status":"OB","customer":"AG","type":"NON RH","stage":"NPI","sku":2,"pic":"TRAN","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":10410.0,"monthly":{"2026/M11":10410.0}},{"name":"2026-AG-CHARTER STREET TABLES","status":"OB","customer":"AG","type":"NON RH","stage":"NPI","sku":5,"pic":"TRAN","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":17615.42,"monthly":{"2026/M11":17615.42}},{"name":"2026-RH-DEER VALLEY","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"DUY","sw":"TBC - TBC","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":47893.86,"monthly":{"2028/M03":47893.86}},{"name":"2026-RH-ALTERRA_DEER VALLEY","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":0,"pic":"DUY","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"In Progress","market":"US","total_val":228194.0,"monthly":{"2027/M06":228194.0}},{"name":"2026-BISCAYNE-SLPS - SUGAR LAND, PUBLIC SPACE","status":"REJECTED","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":28,"pic":"HONG","sw":"2027/W01 - 2027/W05","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":156985.76,"monthly":{"2027/M01":156985.76}},{"name":"2026-BISCAYNE-SLPSC","status":"OB","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":35,"pic":"DUNG","sw":"2027/W01 - 2027/W04","drawing":"Pending Approval","veneer":"Pending Approval","metal":"In Progress","market":"US","total_val":83963.21,"monthly":{"2027/M01":83963.21}},{"name":"2026-FLEETWOOD -MGM BELLAGIO","status":"OB","customer":"FLEETWOOD","type":"NON RH","stage":"NPI","sku":1,"pic":"TRAN","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3202.0,"monthly":{"2026/M12":3202.0}},{"name":"2026-RH-FOUR SEASON DUBROVNIK","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":32,"pic":"DUONG","sw":"2026/W50 - 2026/W52","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"EU","total_val":1488143.52,"monthly":{"2026/M12":13804.52,"2027/M11":737169.5,"2027/M12":737169.5}},{"name":"2026-BISCAYNE-AGV MODEL ROOM","status":"CANCELLED","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":15,"pic":"TRAN","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":17279.0,"monthly":{"2027/M01":17279.0}},{"name":"2026-BISCAYNE-AGV MODEL ROOM-EXTRA","status":"REJECTED","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":7,"pic":"TRAN","sw":"2027/W01 - 2027/W02","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":7473.0,"monthly":{"2027/M01":7473.0}},{"name":"2026-BISCAYNE-AGSR - ARIZONA GRAND SUITES - MODEL ROOM","status":"CANCELLED","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":16,"pic":"TRAN","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":11993.0,"monthly":{"2027/M01":11993.0}},{"name":"2026-BISCAYNE-AGSR - ARIZONA GRAND SUITES - EXTRA","status":"CANCELLED","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":6,"pic":"TRAN","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":4270.12,"monthly":{"2027/M01":4270.12}},{"name":"2026-BISCAYNE-AGSR - ARIZONA GRAND SUITES - MODEL ROOM","status":"REMOVED","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":0,"pic":"TRAN","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":3000000.0,"monthly":{"2027/M05":1000000.0,"2027/M06":1000000.0,"2027/M07":1000000.0}},{"name":"2026-BISCAYNE-SPA","status":"OB","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":5,"pic":"TRAN","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":8153.75,"monthly":{"2027/M01":8153.75}},{"name":"2026-BISCAYNE-OLY PA","status":"NOR","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":1,"pic":"TRAN","sw":"2027/W10 - 2027/W10","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":2908.0,"monthly":{"2027/M03":2908.0}},{"name":"2026-MJM-CABIN PROJECT","status":"CANCELLED","customer":"MJM","type":"NON RH","stage":"NPI","sku":3,"pic":"PHONG","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"US","total_val":371000.0,"monthly":{"2027/M01":185500.0,"2027/M03":185500.0}},{"name":"2026-RH-OPS-0069737 TRIBECA CONDOS - VANITIES","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":2,"pic":"DUY","sw":"2026/W50 - 2026/W50","drawing":"In Progress","veneer":"Not Started","metal":"In Progress","market":"US","total_val":42732.35,"monthly":{"2026/M12":4632.56}},{"name":"2026-MV-CLEVELAND CLINIC","status":"NOR","customer":"MV","type":"NON RH","stage":"NPI","sku":27,"pic":"DUNG","sw":"2027/W05 - 2027/W05","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":70241.84,"monthly":{"2027/M01":27000.0,"2027/M03":43241.84}},{"name":"2026-MV-CLEVELAND CLINIC-PHASE 2","status":"NOR","customer":"MV","type":"NON RH","stage":"NPI","sku":29,"pic":"DUNG","sw":"2027/W15 - 2027/W22","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":169552.37,"monthly":{"2027/M05":169552.37}},{"name":"2026-RH-MONTAGE PENDRY BARBADOS","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"DUY","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5839.56,"monthly":{"2026/M11":5839.56}},{"name":"2026-SPECTRUM-PROJECT 550 POCKET DOORS","status":"FC","customer":"SPECTRUM","type":"NON RH","stage":"NPD","sku":1,"pic":"PHONG","sw":"2026/W48 - 2026/W48","drawing":"In Progress","veneer":"Approved","metal":"TBC","market":"US","total_val":42563.3,"monthly":{"2026/M11":730.3,"2027/M04":41833.0}},{"name":"2026-RH- FOUR SEASONS LAS VEGAS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":51,"pic":"PHONG","sw":"2027/W24 - 2027/W26","drawing":"In Progress","veneer":"In Progress","metal":"Not Started","market":"US","total_val":313857.0,"monthly":{"2027/M06":313857.0}},{"name":"2026-RH-LAKE OCONEE TENTS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":7,"pic":"DUNG","sw":"2026/W02 - 2026/W02","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":38935.43,"monthly":{"2027/M01":38935.43}},{"name":"2026-BISCAYNE-MCO","status":"NOR","customer":"BISCAYNE","type":"NON RH","stage":"NPI","sku":2,"pic":"TRAN","sw":"2027/W10 - 2027/W12","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":333776.0,"monthly":{"2027/M03":333776.0}},{"name":"TBC-FAIRFIELD-WASHINGTON-DUKE","status":"PIPELINE","customer":"FAIRFIELD","type":"NON RH","stage":"NPI","sku":3,"pic":"BIEN","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":291481.96,"monthly":{}},{"name":"2026-FAIRFIELD-WASHINGTON-DUKE","status":"FC","customer":"FAIRFIELD","type":"NON RH","stage":"NPD","sku":3,"pic":"BIEN","sw":"TBC - TBC","drawing":"Pending Approval","veneer":"In Progress","metal":"TBC","market":"US","total_val":0.0,"monthly":{"2027/M01":0.0}},{"name":"2026-MONDO-LEXINGTON HOTEL","status":"FC","customer":"MONDO","type":"NON RH","stage":"NPD","sku":11,"pic":"BIEN","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":14973.54,"monthly":{"2027/M01":14973.54}},{"name":"2026-RH-CABOT HILLSIDE HOMES","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":16,"pic":"TBC","sw":"2026/W05 - 2026/W05","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":19342.43,"monthly":{"2027/M01":19342.43}},{"name":"2026-BISCAYNE-PZT","status":"FC","customer":"BISCAYNE","type":"NON RH","stage":"NPD","sku":2,"pic":"TRAN","sw":"2026/W03 - 2026/W03","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"US","total_val":3781530.06,"monthly":{"2027/M01":2799.06}}];

    let currentFilters = {
      year: 'All',
      type: 'All',
      stage: 'All',
      status: 'All'
    };

    function switchPage(pageNum, title) {
      document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.pbi-tab').forEach(t => t.classList.remove('active'));

      document.getElementById('page-' + pageNum).classList.add('active');
      document.getElementById('tab-btn-' + pageNum).classList.add('active');
      document.getElementById('toolbar-page-title').innerText = title;
      document.getElementById('footer-page-num').innerText = pageNum;
    }

    function setFilter(dim, val, btn) {
      currentFilters[dim] = val;
      const parent = btn.parentElement;
      parent.querySelectorAll('.slicer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    }

    function filterByCard(st) {
      currentFilters.status = st;
      const statusPillBox = document.getElementById('slicer-status');
      statusPillBox.querySelectorAll('.slicer-btn').forEach(b => {
        if (st === 'All' && b.innerText === 'All') b.classList.add('active');
        else if (b.innerText.toLowerCase().includes(st.toLowerCase())) b.classList.add('active');
        else b.classList.remove('active');
      });
      applyFilters();
    }

    function resetFilters() {
      currentFilters = { year: 'All', type: 'All', stage: 'All', status: 'All' };
      document.querySelectorAll('.slicer-pill-box').forEach(box => {
        box.querySelectorAll('.slicer-btn').forEach((b, idx) => {
          if (idx === 0) b.classList.add('active');
          else b.classList.remove('active');
        });
      });
      applyFilters();
    }

    function formatCurrency(val) {
      if (val >= 1000000) return '$' + (val / 1000000).toFixed(2) + 'M';
      if (val >= 1000) return '$' + (val / 1000).toFixed(1) + 'K';
      return '$' + val.toFixed(0);
    }

    // A record is a (project, status) slice; its monthly keys carry the year.
    function hasYear(p, yr) {
      return Object.keys(p.monthly).some(m => m.indexOf(yr + '/') === 0);
    }

    function recValue(p, yr) {
      if (yr === 'All') return p.total_val;
      let sum = 0;
      for (const m in p.monthly) {
        if (m.indexOf(yr + '/') === 0) sum += p.monthly[m];
      }
      return sum;
    }

    function applyFilters() {
      const yr = currentFilters.year;
      const filtered = rawProjects.filter(p => {
        if (yr !== 'All' && !hasYear(p, yr)) return false;
        if (currentFilters.type === 'RH' && p.type !== 'RH') return false;
        if (currentFilters.type === 'NON RH' && p.type === 'RH') return false;
        if (currentFilters.stage !== 'All' && p.stage !== currentFilters.stage) return false;
        if (currentFilters.status !== 'All' && p.status !== currentFilters.status) return false;
        return true;
      });

      let shippedVal = 0, shippedCount = 0;
      let obVal = 0, obCount = 0;
      let norVal = 0, norCount = 0;
      let fcVal = 0, fcCount = 0;

      filtered.forEach(p => {
        const v = recValue(p, yr);
        if (p.status === 'SHIPPED') { shippedVal += v; shippedCount++; }
        else if (p.status === 'OB') { obVal += v; obCount++; }
        else if (p.status === 'NOR') { norVal += v; norCount++; }
        else if (p.status === 'FC') { fcVal += v; fcCount++; }
      });

      const totalVal = shippedVal + obVal + norVal + fcVal;
      const totalCount = shippedCount + obCount + norCount + fcCount;

      document.getElementById('kpi-shipped-val').innerText = formatCurrency(shippedVal);
      document.getElementById('kpi-shipped-count').innerText = `${shippedCount} Projects`;

      document.getElementById('kpi-ob-val').innerText = formatCurrency(obVal);
      document.getElementById('kpi-ob-count').innerText = `${obCount} Projects`;

      document.getElementById('kpi-nor-val').innerText = formatCurrency(norVal);
      document.getElementById('kpi-nor-count').innerText = `${norCount} Projects`;

      document.getElementById('kpi-fc-val').innerText = formatCurrency(fcVal);
      document.getElementById('kpi-fc-count').innerText = `${fcCount} Projects`;

      document.getElementById('kpi-total-val').innerText = formatCurrency(totalVal);
      document.getElementById('kpi-total-count').innerText = `${totalCount} Projects Active`;

      renderMatrix(filtered);
      renderGantt(filtered);
      renderStatic(filtered, yr);
    }

    function renderStatic(data, yr) {
      const targetYear = yr === '2027' ? '2027' : '2026';
      const val = p => recValue(p, yr);

      // Operational flow brackets for the displayed year
      let shippedM0109 = 0, obM1012 = 0;
      data.forEach(p => {
        if (p.status === 'SHIPPED') {
          for (let m = 1; m <= 9; m++) shippedM0109 += p.monthly[`${targetYear}/M${String(m).padStart(2, '0')}`] || 0;
        }
        if (p.status === 'OB') {
          for (let m = 10; m <= 12; m++) obM1012 += p.monthly[`${targetYear}/M${String(m).padStart(2, '0')}`] || 0;
        }
      });
      document.getElementById('kpi-shipped-period').innerText =
        yr === 'All' ? 'All Shipment Years' : 'Ship Year ' + targetYear;
      document.getElementById('bracket-shipped').innerText =
        `✓ Historical Deliveries (M01 - M09: ${formatCurrency(shippedM0109)} Shipped)`;
      document.getElementById('bracket-ob').innerText =
        `⚡ Q4 Confirmed Backlog (M10 - M12: ${formatCurrency(obM1012)} OB)`;

      // RH vs Non-RH account mix
      let rh = 0, nonRh = 0, tracked = 0, active = 0;
      data.forEach(p => {
        const v = val(p);
        tracked += v;
        if (p.type === 'RH') rh += v; else nonRh += v;
        if (p.status === 'SHIPPED' || p.status === 'OB') active += v;
      });
      const share = t => tracked > 0 ? (t / tracked * 100) : 0;
      document.getElementById('mix-list').innerHTML = `
        <div class="hbar-item">
          <span class="hbar-name">Non-RH Accounts</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${share(nonRh).toFixed(1)}%; background: var(--pbi-navy);"></div></div>
          <span class="hbar-val">${formatCurrency(nonRh)} (${share(nonRh).toFixed(1)}%)</span>
        </div>
        <div class="hbar-item">
          <span class="hbar-name">Restoration Hardware (RH)</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${share(rh).toFixed(1)}%; background: #C5A059;"></div></div>
          <span class="hbar-val">${formatCurrency(rh)} (${share(rh).toFixed(1)}%)</span>
        </div>`;
      document.getElementById('mix-footer').innerHTML = `
        <span>Total Tracked Volume: <strong>${formatCurrency(tracked)}</strong></span>
        <span>Active Orders (Shipped+OB): <strong>${formatCurrency(active)}</strong></span>`;

      // Top 5 hospitality accounts
      const accounts = {};
      data.forEach(p => { accounts[p.customer] = (accounts[p.customer] || 0) + val(p); });
      const top = Object.entries(accounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const topMax = top.length ? top[0][1] : 1;
      document.getElementById('top5-list').innerHTML = top.map(([name, v], i) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(v / topMax * 100).toFixed(1)}%; background: ${i === 0 ? '#C5A059' : 'var(--pbi-navy)'};"></div></div>
          <span class="hbar-val">${formatCurrency(v)}</span>
        </div>`).join('');

      // Pipeline funnel cards
      const funnel = [
        ['funnel-fc-val', 'funnel-fc-n', 'FC', n => `${n} Forecast (FC) Projects`],
        ['funnel-nor-val', 'funnel-nor-n', 'NOR', n => `${n} Projects · Waiting for PO / Deposit`],
        ['funnel-ob-val', 'funnel-ob-n', 'OB', n => `${n} Projects · Confirmed Order Book`],
        ['funnel-sh-val', 'funnel-sh-n', 'SHIPPED', n => `${n} Projects · Delivered ${targetYear}`],
      ];
      funnel.forEach(([idV, idN, status, label]) => {
        const rows = data.filter(p => p.status === status);
        document.getElementById(idV).innerText =
          formatCurrency(rows.reduce((s, p) => s + val(p), 0));
        document.getElementById(idN).innerText = label(rows.length);
      });

      // Market distribution
      const markets = {};
      data.forEach(p => { markets[p.market] = (markets[p.market] || 0) + 1; });
      const mk = Object.entries(markets).sort((a, b) => b[1] - a[1]);
      const topMarkets = mk.slice(0, 4);
      const restCount = mk.slice(4).reduce((s, [, n]) => s + n, 0);
      if (restCount > 0) topMarkets.push(['Other', restCount]);
      const totalRows = data.length || 1;
      const mkColors = ['var(--pbi-navy)', 'var(--pbi-blue)', 'var(--pbi-teal)', 'var(--pbi-purple)', '#6B7280'];
      document.getElementById('market-list').innerHTML = topMarkets.map(([name, n], i) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(n / totalRows * 100).toFixed(0)}%; background: ${mkColors[i % mkColors.length]};"></div></div>
          <span class="hbar-val">${n} Projects (${(n / totalRows * 100).toFixed(0)}%)</span>
        </div>`).join('');

      // PIC workload
      const pics = {};
      data.forEach(p => { pics[p.pic] = (pics[p.pic] || 0) + 1; });
      const picTop = Object.entries(pics).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const picMax = picTop.length ? picTop[0][1] : 1;
      document.getElementById('pic-list').innerHTML = picTop.map(([name, n]) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(n / picMax * 100).toFixed(0)}%; background: var(--pbi-navy);"></div></div>
          <span class="hbar-val">${n} Projects</span>
        </div>`).join('');
    }

    function renderMatrix(data) {
      const tbody = document.getElementById('matrix-body');
      tbody.innerHTML = '';

      const targetYear = currentFilters.year === '2027' ? '2027' : '2026';
      const months = Array.from({length: 12}, (_, i) => `${targetYear}/M${String(i + 1).padStart(2, '0')}`);

      const categories = [
        { key: 'SHIPPED', label: 'SHIPPED (Fulfilled)', cls: 'row-shipped', fillCls: 'fill-shipped' },
        { key: 'OB', label: 'ORDER BOOK (OB)', cls: 'row-ob', fillCls: 'fill-ob' },
        { key: 'NOR', label: 'NEW ORDER REQUEST (NOR)', cls: 'row-nor', fillCls: 'fill-nor' },
        { key: 'FC', label: 'FORECAST (FC)', cls: 'row-fc', fillCls: 'fill-fc' }
      ];

      const monthlyGrandTotals = Array(12).fill(0);
      let overallGrandTotal = 0;

      categories.forEach(cat => {
        const row = document.createElement('tr');
        row.className = cat.cls;

        let rowHtml = `<td class="cell-rowheader">${cat.label}</td>`;
        let catTotal = 0;

        months.forEach((m, idx) => {
          let monthSum = 0;
          data.filter(p => p.status === cat.key).forEach(p => {
            if (p.monthly[m]) monthSum += p.monthly[m];
          });

          catTotal += monthSum;
          monthlyGrandTotals[idx] += monthSum;

          const barPct = Math.min(100, (monthSum / 2000000) * 100);
          rowHtml += `<td>
            <div class="cell-bar-container">
              <span>${monthSum > 0 ? formatCurrency(monthSum) : '-'}</span>
              ${monthSum > 0 ? `<div class="cell-bar-wrap"><div class="cell-bar-fill ${cat.fillCls}" style="width: ${barPct}%;"></div></div>` : ''}
            </div>
          </td>`;
        });

        overallGrandTotal += catTotal;
        rowHtml += `<td class="cell-total">${formatCurrency(catTotal)}</td>`;
        row.innerHTML = rowHtml;
        tbody.appendChild(row);
      });

      const grandRow = document.createElement('tr');
      grandRow.className = 'row-grandtotal';
      let grandHtml = `<td class="cell-rowheader">GRAND TOTAL ($)</td>`;
      monthlyGrandTotals.forEach(val => {
        grandHtml += `<td>${val > 0 ? formatCurrency(val) : '-'}</td>`;
      });
      grandHtml += `<td class="cell-total">${formatCurrency(overallGrandTotal)}</td>`;
      grandRow.innerHTML = grandHtml;
      tbody.appendChild(grandRow);
    }

    function stageRank(stage) {
      const s = (stage || '').toUpperCase().trim();
      if (s === 'NPD') return 1;
      if (s === 'NPI') return 2;
      return 99;
    }

    function statusRank(status) {
      const st = (status || '').toUpperCase().trim();
      if (st === 'SHIPPED' || st === 'SHIP') return 1;
      if (st === 'OB') return 2;
      if (st === 'NOR') return 3;
      if (st === 'FC') return 4;
      if (st === 'ON HOLD') return 5;
      if (st === 'PIPELINE') return 6;
      if (st === 'DROPPED') return 7;
      if (st === 'CANCELLED') return 8;
      if (st === 'REMOVED') return 9;
      if (st === 'REJECTED') return 10;
      return 99;
    }

    function sortGanttRecords(list) {
      return [...list].sort((a, b) => {
        // 1. Sort by project name (same name sits next to each other)
        const nameA = (a.name || '').toLowerCase().trim();
        const nameB = (b.name || '').toLowerCase().trim();
        const nameCmp = nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
        if (nameCmp !== 0) return nameCmp;

        // 2. Sort by stage (NPD then NPI)
        const stageCmp = stageRank(a.stage) - stageRank(b.stage);
        if (stageCmp !== 0) return stageCmp;

        // 3. Sort by status (Ship -> OB -> NOR -> FC)
        const statusCmp = statusRank(a.status) - statusRank(b.status);
        if (statusCmp !== 0) return statusCmp;

        return 0;
      });
    }

    function renderGantt(data) {
      const tbody = document.getElementById('gantt-body');
      tbody.innerHTML = '';

      const targetYear = currentFilters.year === '2027' ? '2027' : '2026';
      const months = Array.from({length: 12}, (_, i) => `${targetYear}/M${String(i + 1).padStart(2, '0')}`);

      // Sort by Project Name -> Stage (NPD then NPI) -> Status (Ship -> OB -> NOR -> FC)
      const sortedRows = sortGanttRecords(
        data.filter(p => recValue(p, currentFilters.year) > 0)
      );

      sortedRows.forEach(p => {
        const tr = document.createElement('tr');
        const displayVal = recValue(p, currentFilters.year);

        let statusClass = 'tag-pipeline';
        let ganttClass = 'st-fc';
        if (p.status === 'SHIPPED') { statusClass = 'tag-shipped'; ganttClass = 'st-shipped'; }
        else if (p.status === 'OB') { statusClass = 'tag-ob'; ganttClass = 'st-ob'; }
        else if (p.status === 'NOR') { statusClass = 'tag-nor'; ganttClass = 'st-nor'; }
        else if (p.status === 'FC') { statusClass = 'tag-fc'; ganttClass = 'st-fc'; }
        else if (p.status === 'ON HOLD') { statusClass = 'tag-on-hold'; ganttClass = 'st-nor'; }

        const subline = p.market && p.market !== 'TBC' ? `${p.customer} | ${p.market}` : p.customer;

        let html = `
          <td>
            <div style="font-weight: 600; color: var(--pbi-navy);">${p.name}</div>
            <div style="font-size: 10.5px; color: var(--pbi-text-muted);">${subline}</div>
          </td>
          <td style="font-size: 11px; font-weight: 600;">${p.type}</td>
          <td><span style="font-size: 10.5px; font-weight: 600; color: #4B5563;">${p.stage}</span></td>
          <td><span class="status-tag ${statusClass}">${p.status}</span></td>
          <td style="text-align: right; font-weight: 600;">${formatCurrency(displayVal)}</td>
          <td style="text-align: center;">${p.sku || '-'}</td>
          <td style="font-size: 10.5px; color: #4B5563;">${p.sw}</td>
        `;

        months.forEach(m => {
          const val = p.monthly[m];
          if (val && val > 0) {
            html += `<td class="gantt-bar-cell">
              <div class="gantt-active-block ${ganttClass}" title="${p.name} (${m}): ${formatCurrency(val)}">
                ${formatCurrency(val)}
              </div>
            </td>`;
          } else {
            html += `<td class="gantt-bar-cell"><span style="color: #D1D5DB; font-size: 10px;">·</span></td>`;
          }
        });

        const drawClass = p.drawing.toLowerCase().includes('approved') ? 'approved' : 'in-progress';
        const veneerClass = p.veneer.toLowerCase().includes('approved') ? 'approved' : 'in-progress';

        html += `
          <td><span class="milestone-pill ${drawClass}">${p.drawing !== 'nan' ? p.drawing : 'TBC'}</span></td>
          <td><span class="milestone-pill ${veneerClass}">${p.veneer !== 'nan' ? p.veneer : 'TBC'}</span></td>
          <td style="font-weight: 600; color: var(--pbi-navy); font-size: 10.5px;">${p.pic}</td>
        `;

        tr.innerHTML = html;
        tbody.appendChild(tr);
      });
    }

    function filterProjects() {
      const query = document.getElementById('project-search').value.toLowerCase().trim();
      const stageSelect = document.getElementById('stage-filter-select').value;
      const yr = currentFilters.year;

      const filtered = rawProjects.filter(p => {
        if (yr !== 'All' && !hasYear(p, yr)) return false;
        if (currentFilters.type === 'RH' && p.type !== 'RH') return false;
        if (currentFilters.type === 'NON RH' && p.type === 'RH') return false;
        if (currentFilters.status !== 'All' && p.status !== currentFilters.status) return false;
        const matchesQuery = !query || p.name.toLowerCase().includes(query) || p.customer.toLowerCase().includes(query);
        const matchesStage = stageSelect === 'All' || p.stage === stageSelect;
        return matchesQuery && matchesStage;
      });

      renderGantt(filtered);
    }

    applyFilters();
