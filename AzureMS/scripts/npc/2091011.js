var status = -1;
var s1;
var s2;

function start() {
    status = -1;
    action (1, 0, 0);
}

function charsize() {
	for (i = 1; i <= 63; i++)
	{
		if (cm.getClient().getChannelServer().getMapFactory().getMap(925070000 + (i * 100)).getCharactersSize() > 0)
		{
		return 1;
		}
	}
	return 0;
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	if (cm.getPlayer().getMapId() == 925020001) {
		cm.sendSimple("�츮 ��δ��� �������� �ְ��� ���� ������. �׷� �п��� �װ� �����ϰڴٰ�? ���߿� ��ȸ������. #b\r\n#L0# ���� ���忡 �����غ���.#l\r\n#L1# ���� ������ ����?#l\r\n#L2# ���� ���忡�� ���� �� �ִ� ������ Ȯ���ϰ� �;�.#l\r\n#L3# ���� ���� ���� Ƚ���� Ȯ���ϰ� �;�.#l\r\n#L4# ���� �ɽ� ���ð��� �����ϰ� �;�.#l");
	} else if (cm.getPlayer().getMapId() == 925080000) {
		cm.sendYesNo("�ɽ� �������� �����Ͻðڽ��ϱ�? ����� ���ñ��� �������� �ʽ��ϴ�.");
	}
    } else if (status == 1) {
	s1 = selection;
	if (cm.getPlayer().getMapId() != 925020001) {
		cm.dispose();
		cm.warp(925020000);
	} else {
		if (selection == 0) {
			cm.dispose();
			if (charsize() > 0) {
				cm.sendOk("�̹� �������� �������忡 ���� ���̾�.");
			} else if (cm.getPlayer().getParty() != null) {
				cm.sendOk("��Ƽ�δ� ������ �� ����! ȥ�ڼ� �����϶�! �����̳�?\r\n\r\n\r\n");
			} else {
				cm.dojowarp(925070100);
				cm.getPlayer().getMap().startMapEffect("���ѽð��� 15��, ���� �ʰ� ���͸� ����Ʈ���� ���� ������ �ö󰡸� ��!", 5120024, 3000);
			}
		} else if (selection == 1) {
			cm.sendNext("�츮 ��δ��� �������� ���� ���� ���̾�. �׷� ��δԲ��� ����� ���� �ٷ� �� ���� �����̶�� ������. ���� ������ �� 62���� ��δ��� �������� �̷���� �� 63���� �ǹ��̾�. �ϳ��ϳ� �ö󰡸鼭 �ڽ��� ������ �� �־�. ���� ���� �Ƿ����δ� ������ ���� ���������.");
		} else if (selection == 2) {
			cm.sendSimple("�������忡�� ������ ���� �� �ִ� ����� �� ������. �������� �Ƿ°� ���� ������ ���� ��Ŀ�� �ǰų�, Ȥ�� ������ ������ ���� ���� �� �ִ� ����Ʈ�� ���� ������ȯ.\r\n\r\n#b#L0#��Ŀ ���� ���� ���´�.\r\n#L1#���� ����(����Ʈ)�� ���� ���´�.");
		} else if (selection == 3) {
			cm.dispose();
			cm.sendNext("���� �������忡�� 3�� ������ �� �־�. �׷� �� �˾Ƽ� ������.");
		} else if (selection == 4) {
			cm.sendYesNo("���� �ɽż��ð��� �Ϲ��ε鿡�Ե� �����ϵ��� �����Ǿ���.\r\n�ٸ�, ���ϰų� ������ �ڸ� �� �� ����. ��� �������� �ִ� ������ ������. ������ �����ϰ� �ִ� �ð��� ���� �鿩��������.\r\n\r\n�����ϰھ�?\r\n#b(�ɽż��ð��� ���� �� �ش� ĳ������ ������ ���� �ڵ����� ����ġ�� �����մϴ�.)");
		}
	}
    } else if (status == 2) {
	s2 = selection;
	if (s1 == 1) {
		cm.sendNextPrev("��δ��� ��� 63���� ������ �� ���� ������ ������ �������� �װ��� ��Ű�� ����. �ڼ��� ������ ���� ����. ��δԸ��� �ƽ� ��.");
	} else if (s2 == 0) {
		cm.sendNext("�� �״�ξ�. ��δԲ��� ������ ��Ŀ���� ����ǰ�� �ϻ��Ͻ���. �����̾߸��� �츮 ���������� �ְ� ��ġ�ϱ�. �׸��� �� ���Կ� ���� ������ �翬�Ѱ� �ƴϰھ�?");
	} else if (s2 == 1) {
		cm.sendNext("���� �������� �������� ���� ����Ʈ�� ���޵� �ž�.\r\n\r\n 1. ������ ������ �����ϴ� ������ ����� ����Ʈ ����\r\n 2. �ڽ��� ���� ��ŷ ������ ���� �� ��ü ��ŷ ������� ���� ����Ʈ ����\r\n\r\n�� �� ���� �������� ����Ʈ�� ���޵� �ž�.\r\n\r\n\r\n");
	} else if (s1 == 4) {
		cm.sendOk("�ɽż��ð� ����� ������ ������ �־�� ���ð��� ���� �����ϴٰ�. �� ���� ���� ���������� �� ��.");
	}
    } else if (status == 3) {
	if (s1 == 1) {
		cm.sendNextPrev("1������ 9��, 11������ 19���� �ϳ��� ������ ������. �������� �Ѿ���� �� �ϳ��� óġ�ϸ� �ȴٰ�.");
	} else if (s2 == 0) {
		cm.sendNextPrev("�� �� ������ ������ ���� ������ ���� ��ŷ ������ �޶�.\r\n\r\n*�Թ� : 105 ~ 140 ����\r\n*���� : 141 ~ 180 ����\r\n*��� : 181 ���� �̻�");
	} else if (s2 == 1) {
		cm.sendNextPrev("������ ����� ����Ʈ�� 1���� 10 ����Ʈ�� �⺻������ ���޵ǰ�, 10���� 100 ����Ʈ�� �߰������� ���޵Ǵ� ����̾�.\r\n\r\n\r\n");
	}
    } else if (status == 4) {
	if (s1 == 1) {
		cm.sendNextPrev("21������ 29���� �ϳ��� ������ �ټ��� ���ϵ��� ������. ������ ���ϵ��� ��� óġ�ؾ� ���� ������ �Ѿ �� �־�.");
	} else if (s2 == 0) {
		cm.dispose();
		cm.sendNextPrev("�翬�� ������� ��ŷ ������ ���� ���� �޶�.\r\n���� �װ� ��� ��ŷ ������ �����ִ��� �� Ȯ���϶��.\r\n\r\n���� �װ� ������ ��ŷ �������� ���� ��Ŀ���ٰ� ������ �޶�� ������ �ʰ���?\r\n#b���� �����ִ� ��ŷ �������� ������ ����#k�Ѵٴ� ���� ���� �����. �ڼ��� ������ �������� ����ǥ���� Ȯ�� �غ����� ��.");
	} else if (s2 == 1) {
		cm.sendNextPrev("��ŷ ������� ���� ����Ʈ�� �� ���� �ڵ��� ���� ��ŷ �����ϼ���, �׸��� �� ���� ����� ������ �� ���� �������� �� �ž�. �ƴϲ���� ���������.\r\n\r\n");
	}
    } else if (status == 5) {
	if (s1 == 1) {
		cm.sendNextPrev("31������ 39���� �� �̻��� ������ ����ؾ� ��.\r\n\r\n33, 36, 39���� ������ ������ 1��1�� �ټ��� �������,\r\n33, 36, 39������ �Ѳ����� �����ϴ� �ټ��� ������� �ܷ������.");
	} else if (s2 == 1) {
		cm.dispose();
		cm.sendNextPrev("��, �׸��� ����Ʈ�� �ִ� #b10�� ����Ʈ#k�� �Ѱ� ������ ���� �� ����. ������ ���� ������ �������.\r\n\r\n\r\n");
	}
    } else if (status == 6) {
	if (s1 == 1) {
		cm.sendNextPrev("40�����ʹ� 10�� ������ ������ ������ ���ӵ� �������� ������. ���⼱ #r15��#k���� ������ ����� �� �־�. �������� �Ƿ����� ������ ���� �� �� �ž�.");
	}
    } else if (status == 7) {
	if (s1 == 1) {
		cm.sendNextPrev("41�� ���ĺ��͵� #r15��#k���� ������ ����� �� �־�. �ֳİ�? �׾� �װ� ������ �˰� �ǰ���. ������...");
	}
    } else if (status == 8) {
	if (s1 == 1) {
		cm.sendNextPrev("41�����ʹ� �ٽ� �ϳ��� �������� ������. ���⿡ ���ؼ� 45���� 50���� �ټ��� �������� �����ϴϱ� ������� �����.");
	}
    } else if (status == 9) {
	if (s1 == 1) {
		cm.sendNextPrev("51������ 56���� �ñ׳ʽ� ������� �ñ׳ʽ��� ��ٸ��� ���� �ž�. �װ� �˴� ��ȭ�� �ñ׳ʽ��� �ƴ϶�� �� �̹� �˰� �ְ���?");
	}
    } else if (status == 10) {
	if (s1 == 1) {
		cm.sendNextPrev("57������ 62���� ��δ��� ���ڵ��� ��Ű�� �־�. ������� �ö󰣴ٸ� ���� ����� �Ƿ��� ����� ���̰���.");
	}
    } else if (status == 11) {
	if (s1 == 1) {
		cm.sendNextPrev("�׵��� �Ƿ��� �װ� �ۿ��� �˴� �Ͱ��� ���� �ٸ� �ž�...������...�� �˾Ƽ� �� �غ����.");
	}
    } else if (status == 12) {
	if (s1 == 1) {
		cm.dispose();
		cm.sendNextPrev("�Դٰ� ��δ��� ���� ���ؼ� �װ� ������ ���忡�� �����ϴ� ���� 10���� 1�ۿ� ���� ���ϴϱ� ���� ��Ȳ������.\r\n�˾Ƶ������ � �� �����. ���� ������������ �ʾ�?");
	}
    }
}