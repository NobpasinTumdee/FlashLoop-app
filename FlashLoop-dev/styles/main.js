import { StyleSheet } from 'react-native';

const mainstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D2C3', // สีพื้นหลังอ่อนๆ
    paddingTop: 50, // ระยะห่างด้านบนสำหรับ Status Bar
    paddingHorizontal: 20, // ระยะห่างด้านข้าง
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#334155',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000', // เงา
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // เงาสำหรับ Android
    overflow: 'hidden', // ซ่อนส่วนเกินของเงา
  },
  textInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#513A2A',
    backgroundColor: '#CDC0AF',
  },
  addButton: {
    backgroundColor: '#513A2A',
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 20, // ระยะห่างด้านล่างของรายการ
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  todoText: {
    flex: 1, // ให้ข้อความขยายเต็มพื้นที่ที่เหลือ
    fontSize: 18,
    color: '#334155',
  },
  deleteButton: {
    backgroundColor: '#ef4444', // สีปุ่มแดง
    width: 36,
    height: 36,
    borderRadius: 18, // ทำให้เป็นวงกลม
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15, // ระยะห่างจากข้อความ
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#64748b',
  },
});

export default mainstyles;