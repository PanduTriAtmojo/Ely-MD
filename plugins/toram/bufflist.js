let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `╔═════ஜ۩۞۩ஜ═════╗
	♔♕
❁*TORAM ONLINE*❁
❁*BUFFLAND CODE*❁
	  ⌆            
╚═════ஜ۩۞۩ஜ═════╝



╔════════════════════════╗
*Cara Masukan Kode Bufland*
Menu=>Terminal=>Kamar=>Terbaru/kamar Teman=>Klick Cari Alamat=>Pilih Masuk Dengan Kode Simpel=>Trus Tinggal Ketik Kode Di Bawah Ini
╚════════════════════════╝



╔═════════╗
*List Simple Code*

☞ ATK
5010007 lvl 8
4147129 lvl 6

☞ MATK
1011133 lvl 4

☞ STR
1110033 lvl 10
4016699 lvl 10
7070777 lvl 10
7031997 lvl 10
1011069 lvl 10

☞ DEX
2020222 lvl 10
7011001 lvl 10
1010058 lvl 10
1010106 lvl 10
5010092 lvl 10

☞ INT
2020707 lvl 10
1032222 Ivl 10
6061294 lvl 10
1010489 lvl 10
6010701 lvl 10

☞ AGI
7162029 lv 10
3192311 lvl 8

☞ VIT
2020909 lvl 9
5130123 lvl 9

☞ CRIT RATE
1100000 lvl 10
1010006 lvl 10 
1010092 lvl 10 
1010017 lvl 10 
1010050 lvl 10 
1011010 lvl 10 
1012000 lvl 10 
7162029 lvl 10 
1069927 lvl 10 
1012000 lvl 10
6010214 lvl 9

☞ ACCURACY
4261111 lvl 10
1010013 lvl 9

☞ W. ATK
1010099 lvl 10
1011126 lvl 10
6010024 lvl 10
2020404 lvl 10
2010136 lvl 10

☞ AMPR
1023040 lvl 10
3062728 lvl 10
1010017 lvl 10
1010092 lvl 10
1010006 lvl 10
5240001 lvl 10
1010050 lvl 10
1019696 lvl 10
3226325 lvl 10
5010103 lvl 10

☞ MP
1010013 lvl 10
1016646 lvl 10
1010216 lvl 10
3080021 lvl 10
6010021 lvl 10
6052000 lvl 10
7010047 lvl 10
6070013 lvl 10
7261580 lvl 7

☞ HP
3011143 lvl 10
1180755 lvl 10
1010032 lvl 10
1010084 lvl 10
1010101 lvl 10
1011945 lvl 10
1222002 lvl 10

☞ -AGGRO
1010038 lvl 10
1010002 lvl 10
6010009 lvl 9
2020808 lvl 9

☞ +AGGRO
2020606 lvl 10
3053131 lvl 10
3030110 lvl 10
2180666 lvl 9
2225222 lv 9
6262000 lvl 9
1190069 lvl 9
1013000 lvl 9
53010057 lvl 9

☞ P. RESIST
1020001 lvl 10
1100000 lvl 10
1018989 lvl 9
1100000 lvl 9

☞ M. RESIST
1101101 lvl 10
1010004 lvl 10
2020505 lvl 10
5246969 lvl 9

☞ FRACTIONAL BARRIER
1222002 lvl 8
6181999 lvl 8

☞ DTE EARTH
3210103 lvl 9
2022222 lvl 8
2020202 lvl 8
4083005 lvl 8 
2099876 lvl 7
1010174 lvl 7 
5240001 lvl 7
3011143 lvl 7
1016646 lvl 7
1010002 lvl 6

☞ DTE DARK
3210104 lvl 9
5010092 lvl 9
6010003 lvl 8
1010006 lvl 7
1016646 lvl 7
1091111 lvl 7
3030069 lvl 7

☞ DTE FIRE
3210106 lvl 9
7011001 lvl 8
1010799 lvl 7
1012610 lvl 5

☞ DTE WIND
3210101 lvl 9
3030303 lvl 8
1010055 lvl 7 
4099876 lvl 7   
1010055 lvl 7

☞ DTE WATER
3210100 lvl 9
7150030 lvl 9
3062111 lvl 8
7011001 lvl 8
1110007 lvl 7
3226325 lvl 6

☞ DTE LIGHT
3210105 lvl 9
1020345 lvl 9
4046666 lvl 8
4016699 lvl 6

☞ DTE NEUTRAL
3210102 lvl 9
3099876 lvl 7
1011902 lvl 7
6061294 lvl 7
1019696 lvl 6
1032727 lvl 5

☞ Drop Rate 
4196969 lvl 5
╚═══════╝`, m)
}

handler.menutoram = ['bufflist toram']
handler.tagstoram = ['toram']
handler.command = /^(buff|bufflist)$/i

export default handler